# Rick & Morty PWA Workshop -> Step 3

## Go offline again

Activate again this checkbox from your DevTools.

Now reload the page. From now one every time you reload you may have to get rid of this possible habit of yours (as a developer) of reloading without cache. Remember to do `cmd + r` instead of `cmd + shift + r`. That is important.

What do you see? It is the App Shell. We lost our dear offline dinosaur.

<img src="visuals/app-shell.png">

Nevertheless there is no content when we are offline because that is not just static files served by us. It is a response to a HTTP request and we need to cache it on runtime.

