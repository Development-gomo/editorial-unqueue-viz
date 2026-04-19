<?php
/**
 * Plugin Name: BOLD Content API
 * Description: Custom Post Types, ACF Options Pages, and REST endpoints that power the BOLD React front-end.
 * Version:     1.0.0
 * Author:      BOLD Agency
 *
 * INSTALL OPTIONS
 *  A) Drop this file into wp-content/mu-plugins/bold-content.php  (recommended — auto-active, survives theme switches)
 *  B) Or paste the body of this file (everything below the opening <?php tag) into your active theme's functions.php
 *
 * REQUIRES
 *  - Advanced Custom Fields PRO (for ACF Options Pages + repeaters)
 *  - Permalinks set to anything other than "Plain"  (Settings → Permalinks → Save)
 *
 * AFTER INSTALL
 *  1. ACF → Tools → Import Field Groups → import every JSON file in /wordpress/acf/
 *  2. Visit Settings → Permalinks and click Save (flushes rewrite rules)
 *  3. Test:  https://gomostaging.com/kc-staging/wp-json/bold/v1/hero
 */

if (!defined('ABSPATH')) exit;

/* =========================================================================
 * 1. CUSTOM POST TYPES
 * =======================================================================*/
add_action('init', function () {

    register_post_type('bold_project', [
        'label'        => 'Projects',
        'public'       => true,
        'show_in_rest' => true,
        'menu_icon'    => 'dashicons-portfolio',
        'supports'     => ['title', 'editor', 'thumbnail'],
        'has_archive'  => false,
        'rewrite'      => ['slug' => 'work'],
    ]);

    register_post_type('bold_team', [
        'label'        => 'Team Members',
        'public'       => true,
        'show_in_rest' => true,
        'menu_icon'    => 'dashicons-groups',
        'supports'     => ['title', 'editor', 'thumbnail'],
        'has_archive'  => false,
    ]);

    register_post_type('bold_post', [
        'label'        => 'Blog Posts',
        'public'       => true,
        'show_in_rest' => true,
        'menu_icon'    => 'dashicons-edit',
        'supports'     => ['title', 'editor', 'thumbnail', 'excerpt'],
        'has_archive'  => true,
        'rewrite'      => ['slug' => 'insights'],
    ]);

    register_post_type('bold_case_study', [
        'label'        => 'Case Studies',
        'public'       => true,
        'show_in_rest' => true,
        'menu_icon'    => 'dashicons-awards',
        'supports'     => ['title', 'editor', 'thumbnail'],
        'has_archive'  => false,
        'rewrite'      => ['slug' => 'case-studies'],
    ]);

    register_post_type('bold_service', [
        'label'        => 'Services',
        'public'       => true,
        'show_in_rest' => true,
        'menu_icon'    => 'dashicons-hammer',
        'supports'     => ['title'],
        'has_archive'  => false,
    ]);

    // Project category taxonomy (Branding, Web Design, Digital, Motion…)
    register_taxonomy('bold_project_category', ['bold_project'], [
        'label'        => 'Project Categories',
        'public'       => true,
        'hierarchical' => true,
        'show_in_rest' => true,
    ]);

    // Blog category taxonomy
    register_taxonomy('bold_post_category', ['bold_post'], [
        'label'        => 'Blog Categories',
        'public'       => true,
        'hierarchical' => true,
        'show_in_rest' => true,
    ]);
});

/* =========================================================================
 * 2. ACF OPTIONS PAGES (singletons)
 * =======================================================================*/
add_action('acf/init', function () {
    if (!function_exists('acf_add_options_page')) return;

    acf_add_options_page([
        'page_title' => 'BOLD Site Content',
        'menu_title' => 'BOLD Content',
        'menu_slug'  => 'bold-content',
        'icon_url'   => 'dashicons-admin-customizer',
        'position'   => 2,
        'redirect'   => true,
    ]);

    foreach ([
        'hero'       => 'Hero',
        'navigation' => 'Navigation',
        'footer'     => 'Footer',
        'about'      => 'About Page',
        'contact'    => 'Contact Page',
        'services'   => 'Services Marquee',
    ] as $slug => $title) {
        acf_add_options_sub_page([
            'page_title'  => $title,
            'menu_title'  => $title,
            'parent_slug' => 'bold-content',
            'menu_slug'   => 'bold-' . $slug,
        ]);
    }
});

/* =========================================================================
 * 3. CORS — allow GET on /wp-json/bold/v1/* from anywhere
 *    (tighten to your front-end domain in production)
 * =======================================================================*/
add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        $origin = get_http_origin();
        $allowed = ['*']; // e.g. ['https://yoursite.com'] in production
        if (in_array('*', $allowed) || in_array($origin, $allowed)) {
            header('Access-Control-Allow-Origin: ' . ($origin ?: '*'));
        }
        header('Access-Control-Allow-Methods: GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        header('Access-Control-Allow-Credentials: false');
        if ('OPTIONS' === $_SERVER['REQUEST_METHOD']) {
            status_header(200);
            exit();
        }
        return $value;
    });
}, 15);

/* =========================================================================
 * 4. HELPERS
 * =======================================================================*/
function bold_img($field) {
    if (empty($field)) return '';
    if (is_array($field)) return $field['url'] ?? '';
    if (is_numeric($field)) return wp_get_attachment_image_url($field, 'large') ?: '';
    return (string) $field;
}

function bold_thumb($post_id, $size = 'large') {
    $url = get_the_post_thumbnail_url($post_id, $size);
    return $url ?: '';
}

function bold_first_term($post_id, $taxonomy) {
    $terms = get_the_terms($post_id, $taxonomy);
    if (is_wp_error($terms) || empty($terms)) return '';
    return $terms[0]->name;
}

/* =========================================================================
 * 5. REST ENDPOINTS  —  /wp-json/bold/v1/*
 *    Each returns JSON shaped exactly like the matching src/data/*.json
 * =======================================================================*/
add_action('rest_api_init', function () {

    $ns = 'bold/v1';

    /* ---------- /hero  ---------- */
    register_rest_route($ns, '/hero', [
        'methods'  => 'GET',
        'permission_callback' => '__return_true',
        'callback' => function () {
            $h = get_field('hero', 'option') ?: [];
            $cta = [];
            if (!empty($h['cta']) && is_array($h['cta'])) {
                foreach ($h['cta'] as $c) {
                    $cta[] = [
                        'text'    => $c['text'] ?? '',
                        'href'    => $c['href'] ?? '#',
                        'variant' => $c['variant'] ?? 'hero',
                    ];
                }
            }
            return [
                'tagline'    => $h['tagline'] ?? '',
                'headline'   => array_values(array_filter([
                    $h['headline_1'] ?? '',
                    $h['headline_2'] ?? '',
                    $h['headline_3'] ?? '',
                ])),
                'accentLine' => isset($h['accent_line']) ? (int) $h['accent_line'] : 1,
                'videoUrl'   => $h['video_url'] ?? '',
                'cta'        => $cta,
                'scrollText' => $h['scroll_text'] ?? 'Scroll',
            ];
        },
    ]);

    /* ---------- /navigation ---------- */
    register_rest_route($ns, '/navigation', [
        'methods'  => 'GET',
        'permission_callback' => '__return_true',
        'callback' => function () {
            $n = get_field('navigation', 'option') ?: [];
            $links = [];
            if (!empty($n['links']) && is_array($n['links'])) {
                foreach ($n['links'] as $l) {
                    $links[] = ['name' => $l['name'] ?? '', 'href' => $l['href'] ?? '#'];
                }
            }
            return [
                'logo'  => [
                    'text'   => $n['logo_text'] ?? 'BOLD',
                    'accent' => $n['logo_accent'] ?? '*',
                ],
                'links' => $links,
                'cta'   => [
                    'text' => $n['cta_text'] ?? "Let's Talk",
                    'href' => $n['cta_href'] ?? '/contact',
                ],
            ];
        },
    ]);

    /* ---------- /footer ---------- */
    register_rest_route($ns, '/footer', [
        'methods'  => 'GET',
        'permission_callback' => '__return_true',
        'callback' => function () {
            $f = get_field('footer', 'option') ?: [];
            $shape = function ($rows, $keys) {
                $out = [];
                if (!empty($rows) && is_array($rows)) {
                    foreach ($rows as $r) {
                        $row = [];
                        foreach ($keys as $k) $row[$k] = $r[$k] ?? '';
                        $out[] = $row;
                    }
                }
                return $out;
            };
            return [
                'brand'      => ['description' => $f['brand_description'] ?? ''],
                'navigation' => $shape($f['navigation'] ?? [], ['name', 'href']),
                'social'     => $shape($f['social'] ?? [], ['name', 'icon', 'href']),
                'legal'      => $shape($f['legal'] ?? [], ['name', 'href']),
            ];
        },
    ]);

    /* ---------- /services ---------- */
    register_rest_route($ns, '/services', [
        'methods'  => 'GET',
        'permission_callback' => '__return_true',
        'callback' => function () {
            // Prefer CPT, fallback to options-page repeater
            $items = [];
            $q = new WP_Query(['post_type' => 'bold_service', 'posts_per_page' => -1, 'orderby' => 'menu_order title', 'order' => 'ASC']);
            foreach ($q->posts as $p) $items[] = $p->post_title;
            wp_reset_postdata();

            if (empty($items)) {
                $opt = get_field('services', 'option') ?: [];
                if (!empty($opt['items']) && is_array($opt['items'])) {
                    foreach ($opt['items'] as $row) {
                        $items[] = is_array($row) ? ($row['name'] ?? '') : (string) $row;
                    }
                }
            }
            return ['items' => array_values(array_filter($items))];
        },
    ]);

    /* ---------- /about ---------- */
    register_rest_route($ns, '/about', [
        'methods'  => 'GET',
        'permission_callback' => '__return_true',
        'callback' => function () {
            $a = get_field('about', 'option') ?: [];
            $stats = [];
            if (!empty($a['stats']) && is_array($a['stats'])) {
                foreach ($a['stats'] as $s) {
                    $stats[] = ['number' => $s['number'] ?? '', 'label' => $s['label'] ?? ''];
                }
            }
            $values = [];
            if (!empty($a['values']) && is_array($a['values'])) {
                foreach ($a['values'] as $v) {
                    $values[] = [
                        'number'      => $v['number'] ?? '',
                        'title'       => $v['title'] ?? '',
                        'description' => $v['description'] ?? '',
                    ];
                }
            }
            $paragraphs = [];
            if (!empty($a['story_paragraphs']) && is_array($a['story_paragraphs'])) {
                foreach ($a['story_paragraphs'] as $p) {
                    $paragraphs[] = is_array($p) ? ($p['text'] ?? '') : (string) $p;
                }
            }
            return [
                'stats'     => $stats,
                'values'    => $values,
                'story'     => ['paragraphs' => $paragraphs],
                'heroImage' => bold_img($a['hero_image'] ?? ''),
            ];
        },
    ]);

    /* ---------- /contact ---------- */
    register_rest_route($ns, '/contact', [
        'methods'  => 'GET',
        'permission_callback' => '__return_true',
        'callback' => function () {
            $c = get_field('contact', 'option') ?: [];
            $types = [['value' => '', 'label' => 'Select a service']];
            if (!empty($c['project_types']) && is_array($c['project_types'])) {
                foreach ($c['project_types'] as $t) {
                    $types[] = ['value' => $t['value'] ?? '', 'label' => $t['label'] ?? ''];
                }
            }
            return [
                'info' => [
                    'email'   => $c['email'] ?? '',
                    'phone'   => $c['phone'] ?? '',
                    'address' => [
                        'line1' => $c['address_line1'] ?? '',
                        'line2' => $c['address_line2'] ?? '',
                    ],
                    'mapImage' => bold_img($c['map_image'] ?? ''),
                ],
                'projectTypes' => $types,
            ];
        },
    ]);

    /* ---------- /projects ---------- */
    register_rest_route($ns, '/projects', [
        'methods'  => 'GET',
        'permission_callback' => '__return_true',
        'callback' => function () {
            $all = [];
            $featured = [];
            $cats = ['All'];

            $q = new WP_Query([
                'post_type'      => 'bold_project',
                'posts_per_page' => -1,
                'orderby'        => 'menu_order date',
                'order'          => 'ASC',
            ]);

            foreach ($q->posts as $p) {
                $cat = bold_first_term($p->ID, 'bold_project_category');
                if ($cat && !in_array($cat, $cats, true)) $cats[] = $cat;

                $item = [
                    'id'       => $p->ID,
                    'title'    => get_the_title($p),
                    'category' => $cat,
                    'image'    => bold_thumb($p->ID),
                    'size'     => get_field('size', $p->ID) ?: 'small',
                ];
                $all[] = $item;
                if (get_field('is_featured', $p->ID)) $featured[] = $item;
            }
            wp_reset_postdata();

            return ['featured' => $featured, 'all' => $all, 'categories' => $cats];
        },
    ]);

    /* ---------- /team ---------- */
    register_rest_route($ns, '/team', [
        'methods'  => 'GET',
        'permission_callback' => '__return_true',
        'callback' => function () {
            $all = [];
            $preview = [];
            $q = new WP_Query([
                'post_type'      => 'bold_team',
                'posts_per_page' => -1,
                'orderby'        => 'menu_order date',
                'order'          => 'ASC',
            ]);
            foreach ($q->posts as $p) {
                $member = [
                    'name'  => get_the_title($p),
                    'role'  => get_field('role', $p->ID) ?: '',
                    'bio'   => get_field('bio', $p->ID) ?: '',
                    'image' => bold_thumb($p->ID),
                ];
                $all[] = $member;
                if (get_field('show_in_preview', $p->ID)) $preview[] = $member;
            }
            wp_reset_postdata();
            return ['preview' => $preview, 'all' => $all];
        },
    ]);

    /* ---------- /blog ---------- */
    register_rest_route($ns, '/blog', [
        'methods'  => 'GET',
        'permission_callback' => '__return_true',
        'callback' => function () {
            $all = [];
            $preview = [];
            $q = new WP_Query([
                'post_type'      => 'bold_post',
                'posts_per_page' => -1,
                'orderby'        => 'date',
                'order'          => 'DESC',
            ]);
            foreach ($q->posts as $p) {
                $post = [
                    'id'       => $p->ID,
                    'title'    => get_the_title($p),
                    'excerpt'  => get_the_excerpt($p) ?: wp_trim_words(strip_tags($p->post_content), 22),
                    'date'     => get_the_date('M j, Y', $p),
                    'category' => bold_first_term($p->ID, 'bold_post_category'),
                    'image'    => bold_thumb($p->ID),
                ];
                if (get_field('is_featured', $p->ID)) $post['featured'] = true;
                $all[] = $post;
                if (get_field('show_in_preview', $p->ID)) $preview[] = $post;
            }
            wp_reset_postdata();
            return ['preview' => array_slice($preview, 0, 3), 'all' => $all];
        },
    ]);

    /* ---------- /case-studies (object keyed by id) ---------- */
    register_rest_route($ns, '/case-studies', [
        'methods'  => 'GET',
        'permission_callback' => '__return_true',
        'callback' => function () {
            $out = new stdClass();
            $q = new WP_Query([
                'post_type'      => 'bold_case_study',
                'posts_per_page' => -1,
                'orderby'        => 'date',
                'order'          => 'DESC',
            ]);
            foreach ($q->posts as $p) {
                $images = [];
                if (have_rows('images', $p->ID)) {
                    while (have_rows('images', $p->ID)) {
                        the_row();
                        $img = get_sub_field('image');
                        $url = bold_img($img);
                        if ($url) $images[] = $url;
                    }
                }
                $out->{$p->ID} = [
                    'title'       => get_the_title($p),
                    'category'    => get_field('category', $p->ID) ?: '',
                    'year'        => get_field('year', $p->ID) ?: '',
                    'client'      => get_field('client', $p->ID) ?: '',
                    'description' => get_field('description', $p->ID) ?: '',
                    'challenge'   => get_field('challenge', $p->ID) ?: '',
                    'solution'    => get_field('solution', $p->ID) ?: '',
                    'heroImage'   => bold_img(get_field('hero_image', $p->ID)),
                    'images'      => $images,
                ];
            }
            wp_reset_postdata();
            return $out;
        },
    ]);
});
