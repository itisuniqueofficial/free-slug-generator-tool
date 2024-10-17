function generateSlug() {
    let inputText = document.getElementById('inputText').value;

    // Convert to lowercase, remove special characters, and replace spaces and periods with hyphens
    let slug = inputText
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-.]/g, '')   // Remove special characters but keep spaces and periods
        .replace(/[.\s]+/g, '-')         // Replace spaces and periods with hyphens

    document.getElementById('outputSlug').value = slug;
}

function copySlug() {
    let slugField = document.getElementById('outputSlug');
    slugField.select();
    slugField.setSelectionRange(0, 99999);  // For mobile devices

    // Copy the slug to the clipboard
    document.execCommand("copy");

    // Display a short alert to confirm slug was copied
    alert("Slug copied to clipboard: " + slugField.value);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, (error) => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}


let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installButton = document.createElement('button');
  installButton.textContent = 'Install App';
  installButton.style.width = '100%';
  installButton.style.margin = '10px';
  document.querySelector('body').appendChild(installButton);

  installButton.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  });
});
