// This is the "Offline copy of pages" service worker
// service-worker.js
importScripts('storage.googleapis.com');

if (workbox.googleAnalytics) {
  workbox.googleAnalytics.initialize();
}

workbox.routing.registerRoute(
  // Cachea todos los archivos estáticos: CSS, JS, PNG, HTML, etc.
  new RegExp('.*\.(?:png|jpg|jpeg|svg|gif|html|css|js)$'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'mi-pwa-static-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 7 * 24 * 60 * 60, // Cache for 1 week
      }),
    ],
  })
);

// Usa Network First para otras cosas (como APIs externas o la propia navegación)
workbox.routing.registerRoute(
  new RegExp('/.*'),
  new workbox.strategies.NetworkFirst()
);

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  clients.claim();
});
