self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/Buffalo/',
        '/Buffalo/index.html',
        '/Buffalo/manifest.json',
        'https://i.ibb.co/PW9DkHK/BUFFALO-APP.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
