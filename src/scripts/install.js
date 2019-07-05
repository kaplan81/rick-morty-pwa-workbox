const installButton = document.querySelector('.install-btn');
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
installButton.addEventListener('click', installPWA);

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

function saveBeforeInstallPromptEvent(evt) {
  // Add code to save event & show the install button.
  deferredInstallPrompt = evt;
  installButton.classList.remove('hidden');
}
