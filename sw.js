// OBSID-Studio Service Worker v2
const CACHE_NAME = 'obsid-studio-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/css/main.min.css',
  '/assets/js/main.min.js',
  '/assets/images/favicon.svg',
  '/assets/images/obsid-mark.svg',
  '/assets/images/readme-hero.svg',
  '/assets/images/real-studio-preview.svg',
  '/assets/images/readme-preview.svg',
  '/assets/images/readme-motion.svg',
  '/assets/images/readme-product-map.svg',
  '/assets/images/obsid-studio-cockpit.svg',
  '/assets/images/og-image.svg',
  '/assets/images/obsid-studio-look.webp',
  '/sw.js',
];

// Install: Cache all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting()) // Force the new SW to activate
  );
});

// Fetch: Serve from cache or fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => self.clients.claim()) // Take control of all clients
  );
});

// Listen for messages (for future updates)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
