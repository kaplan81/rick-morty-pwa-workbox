# Rick & Morty PWA Workshop -> Step 3

## Go offline again

Activate again this checkbox from your DevTools.

Now reload the page. From now on every time you reload you may have to get rid of this possible habit of yours (as a developer) of reloading without cache. Remember to do `cmd + r` instead of `cmd + shift + r`. That is important.

What do you see? It is the App Shell. We lost our dear offline dinosaur.

<img src="visuals/app-shell.png">

Nevertheless there is no content when we are offline because that is not just static files served by us. It is a response to a HTTP request and we need to cache it on runtime.

## Cache the API route

Go online again and reload the page.

Go to your DevTools Application tab and check on the Cache Storage section.

<img src="visuals/cache-storage-only-precache.png">

Look to the right. All our app shell, all the files specified in the `dist/sw.js` are cached there with their corresponding revision hash.

We need to cache the response to the `rickandmortyapi` API.

The base URL we are using is `https://rickandmortyapi.com/api/character`. Then we got 3 different endpoints:

1. `/?` gets all the characters. We use it on the home page.
2. `/1` gets the character with id 1. We use it on the character page.
3. `/avatar/1.jpeg` gets the picture (or avatar) of character with id 1. We use it on both pages.

We shoud create a regular expression that matches both case 1 and case 2 for API calls but NOT case 3. That is probably the most difficult part of this exercise. We all have problems from time to time with regular expressions so if you cannot figure it out just look at the code of this branch for the solution.

Since new characters can die as the TV shows goes on, we need to have the most up-to-date information so we will use the Network First caching strategy (falling back to cache).

If you want to know more about the most common (runtime) caching strategies take a look at the [Workbox documentation](https://developers.google.com/web/tools/workbox/guides/route-requests#handling_a_route_with_a_workbox_strategy). The `workbox.strategies` package takes care of the implementation of those ones.

Go to `src/sw-custom.js` and add the necessary runtime caching. Follow this implementation template:

```javascript
workbox.routing.registerRoute(
  /https:\/\/regular-expression\/for\/api-url/,
  new workbox.strategies.MyCachingStrategy({
    cacheName: 'my-cache-name',
    plugins: []
  })
);
```

For the precache Workbox follows the `workbox-precache-xxx` naming convention. If we do not specify a `cacheName` it will do the same but with `workbox-runtime-xxx`. In this case we will use the name `rickandmortyapi-cache` in order to make it unique.

And last but not least: maybe you haven't noticed but we are only getting the first 20 results of the API. This means that we can limit the number of entries to 20. For that we need the workbox expiration plugin.

Take a look at how how to implement a Workbox plugin [here](https://developers.google.com/web/tools/workbox/guides/using-plugins#workbox_plugins).

## A new service worker

```bash
npm run build
```

What you are building now is a new version of your service worker because more than one byte of the file has changed. The browser detects that automatically and assigns a new id number to it. But if instead of performing the change on `registerRoute()` we would have changed the `workbox-config.js` and therefore our app shell then the name of the key for the Cache Storage would have needed to be re-assigned too. We are lucky that Workbox handles that for us. Otherwise we would have to change that key manually every time that the files to precache vary.

Go to your DevTools Application tab again and see what has happened there.

<img src="visuals/service-worker-waiting.png">

The service worker lifecycle ensures that the page is controlled by only one version of the service worker at a time. In this moment the old service worker with id 1960 is still active and the new one with id 1979 is waiting to be activated. We can activate the new service worker in different ways:

* By closing al the windows (tabs) with the same origin (protocol + hostname + port) and then open again the app in a new one.
* By clicking on `skipWaiting`.
* By adding the `self.skipWaiting()` method to our service worker.
* By activating the "Update on reload" checkbox and then reloading the page.

<img src="visuals/update-on-reload.png">

The best practice is to go for Update on reaload so do that reload the page (remember: WITH cache).

Now the new service worker is active and we have a new cache slot.

<img src="visuals/rickyandmortyapi-cache.png">

If you implemented this route correctly you should see the cached response too:

<img src="visuals/rickyandmortyapi-cached-response.png">

And you couldn't do better than taking a peek at the Networt tab. You may find this interesting.

<img src="visuals/gear-icon-in-network-item.png">

If there ir a gear icon on the request it means that this is a request made by the service worker. The one without the gear icon is the served response which comes from the service worker and therefore from the Cache Storage.

## Cache the images

But what happens if we go offline again? Well...

<img src="visuals/offline-with-api-without-imgs.png">

We have cached the response from the server but then some resorce URLs are making extra calls to get the individual images. We are not caching that yet and that is why we can only see the precached placeholder image on each of the characters.

Your next challenge consists of caching the images. These are avatars so we don't need to constantly have the most up-to-date version of them. The Stale While Revalidate strategy seems to fit our needs here. With that will only use responses from the cache BUT we will also make a call to the network and if that call is successful we cache that response for the next time. Pretty neat, right?

As we already know we are using the same base URL as with the API calls but with a different endpoint. We are looking for another regular expression but this time one that matches that base with an endpoint that contains the word `avatar` and ends with the string `jpeg`. 

Additionally we want to store the images in a named `avatar-cache`, again we want to limit the entries to 20 and also, using the same plugin, we want the cached images to expire in a week so we get updated weekly. For that we would use the `maxAgeSeconds` property from the plugin.

Tick, tack, tick, tack, tick, tack,...

Did you get it? Awesome. So you know what to do now...

```bash
npm run build
```

...and reload. Look at that.

<img src="visuals/avatar-cache.png">

## If you get in trouble

If either the cache or the service workers behave funny and have the need for a fresh start you can always call on a very useful utility from the DevTools. Go to the Application -> Clear Storage section and click on "Clear site data". This will not only remove the storage from this origin but it will also unregister all existing service workers.

<img src="visuals/clear-storage.png">

Just remember that if you do that you will need to reload twice to see the runtime caches since on the first load you only get the precached files. The rest of the information gets cached during this first life of the app so we will only be able to see this information on a second round.

## If you didn't make it

```bash
git checkout step-03-offline-experience
git branch step-03-offline-experience-mine
```