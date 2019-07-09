# Rick & Morty PWA Workshop -> Step 4

## Install Button

With all this development you have probably missed the Web App Install Banner.

Now if you want to install your app you need to go to the three-dot context menu and click on "Install Rick Morty PWA...". But we can do better.

In `src/index.html` provide a `<button>` to the header. Add the classes `install-btn` and `hidden` to it. Go to `app.scss` and use the former to make it look nicer and the latter to hide the button with `display: none;`.

## Install Script

OK. Now that we have our button we just need to create an script to handle it. Provide it in `src/index.html` too:

```html
<script src="/scripts/install.js"></script>
```

The first thing you need in this script are 2 variables: one for the button element and another one for the `beforeinstallprompt` event that we initialize to `null`:

```javascript
const installButton = document.querySelector('.install-btn');
let deferredInstallPrompt = null;
```

Then 2 events: 

```javascript
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
installButton.addEventListener('click', installPWA);
```

And then 2 functions. The first one is very short. It receives the `beforeinstallprompt` as an `event` parameter and saves it in the `deferredInstallPrompt` variable. It also makes the button visible by removing the `hidden` class. With this description in mind try to write the function from scratch. And remember that the name of this function is specified as a callback in one of the mentioned events.

Done? OK.

The second function prompts the banner, hiddes the button and depending on the user's choice shows a different message in the console. Copy it and paste it:

```javascript
function installPWA(evt) {
  // Add code show install prompt & hide the install button.
  deferredInstallPrompt.prompt();
  // Hide the install button, it can't be called twice.
  evt.srcElement.classList.add('hidden');
  // Log user response to prompt.
  deferredInstallPrompt.userChoice.then(choice => {
    if (choice.outcome === 'accepted') {
      console.log('User accepted the install prompt', choice);
    } else {
      evt.srcElement.classList.remove('hidden');
      console.log('User dismissed the install prompt', choice);
    }
    deferredInstallPrompt = null;
  });
}
```

## Try it out

Build everything and reload the page. You should see the install button.

<img src="visuals/rick-morty-install-01.png">

Now click on install. Don't be afraid.

<img src="visuals/rick-morty-install-02.png">

Reject the installation this time and take a look at the console.

<img src="visuals/rick-morty-install-03.png">

No do the same but accept the installation. You will be prompt with a couple of things but first take a look at the new console message.

<img src="visuals/rick-morty-install-04.png">

The app should be now installed among other of our apps in your system.

<img src="visuals/rick-morty-install-05.png">

And also if you navigate to your Chrome Application in your browser.

<img src="visuals/rick-morty-install-06.png">

And the app itself should display in its own window.

<img src="visuals/rick-morty-install-07.png">


## This is it

You did it! If you got here it means that you are already a PWA developer.

Congratulations!

## If you didn't make it

```bash
git checkout step-04-install-experience
git branch step-04-install-experience-mine
```