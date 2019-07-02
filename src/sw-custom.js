importScripts('/scripts/workbox-libs/workbox-v4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.setConfig({
    modulePathPrefix: '/scripts/workbox-libs/workbox-v4.3.1/'
  });

  workbox.precaching.precacheAndRoute([]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
