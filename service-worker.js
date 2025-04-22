// service-worker.js

// Minimal service worker to enable PWA installability.
// It doesn't provide offline caching in this basic version.

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  // self.skipWaiting(); // Optional: Activate new SW faster
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  // Optional: Clean up old caches here
});

self.addEventListener('fetch', (event) => {
  // console.log('Service Worker: Fetching', event.request.url);
  // Basic "network falling back to cache" or "cache first" is needed for offline.
  // For now, just pass through to the network to keep things simple.
  event.respondWith(fetch(event.request));
});