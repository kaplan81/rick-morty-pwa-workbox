importScripts('/scripts/workbox-libs/workbox-v4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.setConfig({
    modulePathPrefix: '/scripts/workbox-libs/workbox-v4.3.1/'
  });

  workbox.precaching.precacheAndRoute([]);

  workbox.routing.registerRoute(
    'https://rickandmortyapi.com/api/character/?',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'rickandmortyapi-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 20
        })
      ]
    })
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
