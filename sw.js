self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open('pocket-claim-gremlin').then(c => c.addAll([
    './', './index.html', './manifest.webmanifest', './sw.js', './icon-192.png', './icon-512.png'
  ])));
});
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()) });
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
