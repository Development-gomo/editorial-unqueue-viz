/**
 * WordPress REST client with stale-while-revalidate caching.
 *
 * Strategy:
 *  1. On read, return cached value from memory or localStorage if it exists (instant).
 *  2. If cache is older than TTL (or missing), kick off a network refresh in the background.
 *  3. Subscribers get notified when fresh data arrives.
 *  4. If network fails, fall back to bundled JSON shipped with the build.
 */

import heroFallback from "@/data/hero.json";
import navFallback from "@/data/navigation.json";
import footerFallback from "@/data/footer.json";
import servicesFallback from "@/data/services.json";
import aboutFallback from "@/data/about.json";
import contactFallback from "@/data/contact.json";
import projectsFallback from "@/data/projects.json";
import teamFallback from "@/data/team.json";
import blogFallback from "@/data/blog.json";
import caseStudiesFallback from "@/data/caseStudies.json";

// key  ->  { endpoint, fallback }
export const WP_RESOURCES = {
  hero:        { endpoint: "/hero",         fallback: heroFallback },
  navigation:  { endpoint: "/navigation",   fallback: navFallback },
  footer:      { endpoint: "/footer",       fallback: footerFallback },
  services:    { endpoint: "/services",     fallback: servicesFallback },
  about:       { endpoint: "/about",        fallback: aboutFallback },
  contact:     { endpoint: "/contact",      fallback: contactFallback },
  projects:    { endpoint: "/projects",     fallback: projectsFallback },
  team:        { endpoint: "/team",         fallback: teamFallback },
  blog:        { endpoint: "/blog",         fallback: blogFallback },
  caseStudies: { endpoint: "/case-studies", fallback: caseStudiesFallback },
};

const TTL_MS = 10 * 60 * 1000; // 10 minutes
const STORAGE_PREFIX = "bold:wp:";
const API_BASE =
  (import.meta.env.VITE_WP_API_BASE || "").replace(/\/+$/, "") || null;

const memoryCache = new Map(); // key -> { data, ts }
const inflight = new Map();    // key -> Promise
const subscribers = new Map(); // key -> Set<fn>

function readStorage(key) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed.ts !== "number") return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeStorage(key, data) {
  try {
    localStorage.setItem(
      STORAGE_PREFIX + key,
      JSON.stringify({ data, ts: Date.now() })
    );
  } catch {
    /* quota exceeded — ignore */
  }
}

function notify(key, data) {
  const subs = subscribers.get(key);
  if (subs) subs.forEach((fn) => fn(data));
}

async function fetchFresh(key) {
  if (!API_BASE) throw new Error("VITE_WP_API_BASE not configured");
  const { endpoint } = WP_RESOURCES[key];
  const res = await fetch(API_BASE + endpoint, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`WP ${endpoint} → ${res.status}`);
  return res.json();
}

function refresh(key) {
  if (inflight.has(key)) return inflight.get(key);
  const p = fetchFresh(key)
    .then((data) => {
      memoryCache.set(key, { data, ts: Date.now() });
      writeStorage(key, data);
      notify(key, data);
      return data;
    })
    .catch((err) => {
      if (import.meta.env.DEV) console.warn("[wp]", key, err.message);
      throw err;
    })
    .finally(() => inflight.delete(key));
  inflight.set(key, p);
  return p;
}

/**
 * Synchronously return the best data we have right now (memory > storage > fallback)
 * and trigger a background refresh if the cache is stale.
 */
export function readWp(key) {
  const def = WP_RESOURCES[key];
  if (!def) throw new Error(`Unknown WP resource: ${key}`);

  let mem = memoryCache.get(key);
  if (!mem) {
    const stored = readStorage(key);
    if (stored) {
      mem = stored;
      memoryCache.set(key, stored);
    }
  }

  const now = Date.now();
  const isStale = !mem || now - mem.ts > TTL_MS;
  if (isStale && API_BASE) {
    // fire and forget; subscribers will be notified
    refresh(key).catch(() => {});
  }

  return mem?.data ?? def.fallback;
}

export function subscribeWp(key, fn) {
  if (!subscribers.has(key)) subscribers.set(key, new Set());
  subscribers.get(key).add(fn);
  return () => subscribers.get(key)?.delete(fn);
}
