importScripts('/scripts/workbox-v4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.setConfig({
    modulePathPrefix: '/scripts/workbox-v4.3.1/'
  });

  workbox.precaching.precacheAndRoute([], {
    // Ignore all URL parameters.
    ignoreURLParametersMatching: [/.*/]
  });

  workbox.routing.registerRoute(
    /https:\/\/rickandmortyapi.com\/api\/character(?!\/avatar)/,
    new workbox.strategies.NetworkFirst({
      cacheName: 'rickandmortyapi-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 20
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    /https:\/\/rickandmortyapi.com\/api\/character\/avatar(.*)\.(?:jpeg|jpg)/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'avatar-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 20,
          maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
        })
      ]
    })
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
