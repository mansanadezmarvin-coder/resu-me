const CACHE_NAME = 'resume-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/script.js',
  './landing/index.html',
  './landing/style.css',
  './landing/script.js',
  './icon.svg',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
