# BOLD — WordPress Backend

This folder contains everything you need to set up the BOLD content API on WordPress so the React front-end can pull all of its content live from `https://gomostaging.com/kc-staging/`.

## What you get

- **`bold-content.php`** — registers Custom Post Types, ACF Options Pages, custom REST endpoints, and CORS.
- **`acf/*.json`** — ACF field group definitions, importable in one click.

## Endpoints exposed

All under `https://gomostaging.com/kc-staging/wp-json/bold/v1/`:

| Endpoint | Maps to | Source |
| --- | --- | --- |
| `/hero` | `src/data/hero.json` | ACF Options → BOLD Content → Hero |
| `/navigation` | `src/data/navigation.json` | ACF Options → Navigation |
| `/footer` | `src/data/footer.json` | ACF Options → Footer |
| `/services` | `src/data/services.json` | Services CPT (or Options fallback) |
| `/about` | `src/data/about.json` | ACF Options → About Page |
| `/contact` | `src/data/contact.json` | ACF Options → Contact Page |
| `/projects` | `src/data/projects.json` | Projects CPT + Project Categories taxonomy |
| `/team` | `src/data/team.json` | Team Members CPT |
| `/blog` | `src/data/blog.json` | Blog Posts CPT |
| `/case-studies` | `src/data/caseStudies.json` | Case Studies CPT |

## Install steps

1. **Requirements**
   - WordPress 6.x
   - Advanced Custom Fields **PRO** (needed for Options Pages + repeaters)
   - Permalinks set to anything other than “Plain”

2. **Install the PHP**
   - **Recommended:** copy `bold-content.php` to `wp-content/mu-plugins/bold-content.php`. If `mu-plugins` doesn’t exist, create it. mu-plugins are auto-active.
   - **Alternative:** paste the body of `bold-content.php` (everything below the opening `<?php` tag) at the bottom of your active theme’s `functions.php`.

3. **Import ACF field groups**
   - WP Admin → **ACF → Tools → Import Field Groups**
   - Upload **all** files in `wordpress/acf/` at once (or one by one). Order doesn’t matter.

4. **Flush rewrite rules**
   - Settings → Permalinks → click **Save Changes** (no edits needed).

5. **Verify**
   ```
   curl https://gomostaging.com/kc-staging/wp-json/bold/v1/hero
   ```
   Should return JSON with `tagline`, `headline`, etc.

## Populating content

- **Singletons (Hero / Nav / Footer / About / Contact / Services):** WP Admin → **BOLD Content** menu in the sidebar → pick a sub-page → fill in the fields → Save.
- **Collections:** add entries under **Projects**, **Team Members**, **Blog Posts**, **Case Studies** in the sidebar.
  - Set the *Featured image* — that becomes `image` / `heroImage` in the JSON.
  - Toggle **Show on home preview** / **Show on home (featured)** to control what appears on the homepage.
  - For Projects, pick a **Project Category** (taxonomy) — categories auto-populate the `categories` filter on `/portfolio`.

## CORS

`bold-content.php` allows GET requests from any origin on `bold/v1` routes so the React dev preview and your published site both work. To lock it down, change:

```php
$allowed = ['*'];
```

to e.g.

```php
$allowed = ['https://editorial-unqueue-viz.lovable.app', 'https://yoursite.com'];
```

## How the React side consumes this

- The React app reads `VITE_WP_API_BASE` from `.env` (see `.env.example`).
- `src/lib/wp.js` fetches each endpoint with **stale-while-revalidate caching** (10-min TTL, in-memory + `localStorage`).
- If WordPress is unreachable, the bundled `src/data/*.json` files are used as fallbacks so the site never breaks.
- Components use the `useWpData("hero")` hook, which returns the bundled JSON instantly and re-renders when fresh WP data arrives.
