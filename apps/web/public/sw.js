const CACHE_NAME = "jashwant-portfolio-cache-v1";

const PRECACHE_ASSETS = [
  "/portfolio",
  "/manifest.json",
  "/resume/jashwant_photo.webp",
  "/resume/JASHWANT_RANA_2026-07-07.pdf",
];

// Service Worker Install - Pre-cache critical portfolio static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Service Worker Activate - Cleanup stale caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cache) => {
            if (cache !== CACHE_NAME) {
              return caches.delete(cache);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

// Fetch Interceptor - Stale-while-revalidate / Cache-first fallback for offline access
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Bypass Next.js development HMR, Webpack hot updates, and dev server sockets
  if (
    url.pathname.includes("_next/webpack-hmr") ||
    url.pathname.includes("hot-update") ||
    url.pathname.includes("on-demand-entries") ||
    url.search.includes("ts=")
  ) {
    return;
  }

  // Focus on static assets and production caching
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          const fetchPromise = fetch(event.request)
            .then((networkResponse) => {
              if (
                networkResponse &&
                networkResponse.status === 200 &&
                networkResponse.type === "basic"
              ) {
                cache.put(event.request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => {
              return cachedResponse;
            });

          return cachedResponse || fetchPromise;
        });
      })
    );
  }
});
