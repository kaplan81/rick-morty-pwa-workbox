# Rick & Morty PWA Workshop

> How to create your own PWA with Workbox step by step.

<img src="visuals/pwa.svg">

## Goal

Did your manager just asked you to make your project into a Progressive Web Application? Do you know what parts are actually involved in that process? How would you debug that? Do you like the Rick & Morty TV show?

This project is no bible at all. It is a friendly exercise, a way of illustrating how to get to build your own Progressive Web Application. You are going to cover your code with a warming service worker blanket.

You should probably read something about this fascinating topic if you haven't already. Check out the reference links at the bottom of this document.

But wisdom is not a requirement here. Just follow the steps and you will end up with a production ready Rick & Morty PWA.

And we take the framework agnostic approach. React developers, Angular developers, Vue developers, Svelte developers,... they are all welcome to take this workshop. It is just a simple JavaSript app. Even native mobile developers might be interested.

## Why Workbox?

Caching information with service workers involves an amount of boilerplate, configurations and file versioning. Workbox deals with that seamlessly and allowes you to focus on how to take full advantage of a PWA's offline capabilities.

It is not a library but a set of libraries and Node modules that make your life easier.

## How to follow

The `master` branch contains a naked project. We still haven't provided the service worker blanket. However all necessary packages are already specified and the infrastructure is ready for you to take the steps to the final product.

Each of those steps are zero-based numbered in the shape of branches. They keep a `step-xx-title-of-the-step` naming convention so if you ever get stuck in one of them you always have the possibility of checking out the next branch and continue working.

On each branch the `README.md` file is different and self-explanatory. They correspond the current development stage and make you aware of how the code evolves.

## Get started

The prerequisites are simple. Have 2 things installed in your machine:

* Google Chrome
* Node.js

Clone this repo and open the project in your favourite code editor.

Now, the `master` branch should be kept pristine, since we can always come back to it for a fresh start.

Go to step zero. It is a copy of `master`.

```bash
git checkout step-00-non-progressive-app
```

# Related documentation

[https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

[https://extensiblewebmanifesto.org/](https://extensiblewebmanifesto.org/)

[https://developers.google.com/web/fundamentals/web-app-manifest/](https://developers.google.com/web/fundamentals/web-app-manifest/)

[https://jakearchibald.github.io/isserviceworkerready/](https://jakearchibald.github.io/isserviceworkerready/)

[https://developers.google.com/web/fundamentals/primers/service-workers/](https://developers.google.com/web/fundamentals/primers/service-workers/)

[https://developers.google.com/web/fundamentals/primers/service-workers/registration](https://developers.google.com/web/fundamentals/primers/service-workers/registration)

[https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/)

[https://developers.google.com/web/fundamentals/app-install-banners/](https://developers.google.com/web/fundamentals/app-install-banners/)

[https://developers.google.com/web/tools/lighthouse/](https://developers.google.com/web/tools/lighthouse/)

[https://developers.google.com/web/fundamentals/architecture/app-shell](https://developers.google.com/web/fundamentals/architecture/app-shell)

[https://developers.google.com/web/tools/workbox/](https://developers.google.com/web/tools/workbox/)
