# Rick & Morty PWA Workshop

> How to create your own PWA with Workbox step by step.

<img src="visuals/pwa.svg">

## Goal

Did your manager just asked you to make your project into a Progressive Web Application? Do you know what parts are actually involved in that process? How would you debug that? Do you like the Rick & Morty TV show?

This project is no bible at all. It is a friendly exercise, a way of illustrating how to get to build your own Progressive Web Application. You are going to cover your code with a warming service worker blanket.

You should probably read something about this fascinating topic if you haven't already. Check out the reference links at the bottom of this document.

But wisdom is not a requirement here. Just follow the steps and you will end up with a production ready Rick & Morty PWA.

And we take the framework agnostic approach. React developers, Angular developers, Vue developers, Svelte developers,... they are all welcome to take this workshop. It is just a simple JavaScript app. Even native mobile developers might be interested.

## Why Workbox?

Caching information with service workers involves an amount of boilerplate, configurations and file versioning. Workbox deals with that seamlessly and allows you to focus on how to take full advantage of a PWA's offline capabilities.

It is not a library but a set of libraries and Node modules that make your life easier.

## How to follow

The `master` branch contains a naked project. We still haven't provided the service worker blanket. However all necessary packages are already specified and the infrastructure is ready for you to take the steps to the final product.

Each of those steps are zero-based numbered in the shape of branches. They keep a `step-xx-title-of-the-step` naming convention.

The step 0 branch pictures the specific goals to achieve a PWA. No code to be provided there. The next steps/branches do involve some development. They are your tasks, your challenges.

On each branch the `README.md` file is different and self-explanatory. They correspond the current development stage and make you aware of how the code evolves.

**IMPORTANT**: the only branch you should checkout is `step-00-non-progressive-app`. It is also recommended that you create your own branch from that one (e.g. `step-00-non-progressive-app-mine`).

From that point on you will stay in that branch and start providing your own code at the same time that you read the `README.md` instructions of each subsequent branch.

However let us say that you are reading the instructions of the first step from the `README.md` of the `step-01-web-app-manifest` on its GitHub web page. If you are not capable of achieving the desired result you should not worry. Just do this:

```bash
git checkout step-01-web-app-manifest
git checkout -b step-01-web-app-manifest-mine
```

This way you step ahead, you do not get delayed and moreover you keep a clean workflow.

## Get started

The prerequisites are simple. Have 2 things installed in your machine:

* Google Chrome
* Node.js LTS or greater

Clone this repo and open the project in your favourite code editor.

Now, the `master` branch should be kept pristine, since we can always come back to it for a fresh start.

Checkout the step 0 branch. That one, with the exception of `README.md`, is a copy of `master`.

```bash
git checkout step-00-non-progressive-app
git branch step-00-non-progressive-app-mine
```

Now click [here](https://github.com/kaplan81/rick-morty-pwa-workbox/tree/step-00-non-progressive-app) to read the instructions of the step 0 branch.

The game is afoot.

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
