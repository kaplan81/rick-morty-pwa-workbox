# Rick & Morty PWA Workshop -> Step 0

## Up and running

```bash
npm i
npm run build
npm start
```

Open thic URL in Chrome: [`http://localhost:1981/`](http://localhost:1981/)

## Our app

You are probably looking at something like this:

<img src="visuals/rick-morty-pwa-home.png">

We are using [The Rick & Morty API](https://rickandmortyapi.com/) since it is free and funny and it doesn't need any authentication tokens.

On the home page we are collecting 20 random characters from the TV show. By clicking on one of them we navigate to its detail page where we find out if the character is dead or alive. Then we can navigate back to home and keep playing with this simple app.

## Go offline

Open up the Chrome DevTools and go offline.

> Tip: use `cmd + shift + p` for Mac or `ctrl + shift + p` for Windows and type "offline".

Reload the page.

You should see this:

<img src="visuals/offline-dino-game.png">

Play with it using the space bar. How much do you score in the offline Dino Game?

Anyway, as you can see we have lost everything. This exactly what we are trying to avoid by making a PWA.

## Audit with Lighthouse

Lighthouse is an excellent tool to improve the quality of web pages.  It has audits for performance, accessibility, progressive web apps, and more. It is pre-installed in all Chrome browsers and you can either run it from the DevTools or from a Node command.

In our case we are ready to run our npm script, generate the corresponding report on HTML and open it up automatically in our browser.

> Do not forget to go online again first!

```bash
npm run lighthouse
```

<img src="visuals/lighthouse-initial-stats.png">

Now click on the Progressive Web App link (top right).

Notice that there are a lot of things in red:

* Current page does not respond with a 200 when offline.
* start_url does not respond with a 200 when offline
* Does not register a service worker that controls page and start_url
* Web app manifest does not meet the installability requirements
* Does not redirect HTTP traffic to HTTPS
* Is not configured for a custom splash screen
* Does not set an address-bar theme color
* Does not provide a valid apple-touch-icon

The HTTPS red flag is totally expected. For security reasons service workers only run over the HTTPS protocol but if the hostname corresponds our `localhost` the HTTP protocol is also considered secure and we can run our service worker over it. This is intended to make development easier.

We assume that our app will run on a secure protocol in production so we can ignore this supposed failure. However we definitely need to work on the rest of them and make them into green.

Are you ready for the challenge?

From this point on you are going to start providing your own code.

**Do not checkout the next branch**. Keep yourself where you are in your local machine.

**BUT** follow the online instructions specified in the `README.md` of that branch:

[https://github.com/kaplan81/rick-morty-pwa-workbox/tree/step-01-web-app-manifest](https://github.com/kaplan81/rick-morty-pwa-workbox/tree/step-01-web-app-manifest)