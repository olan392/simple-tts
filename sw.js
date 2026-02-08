importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js');

// This makes the SW take control immediately
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// Precache the files. 
// IMPORTANT: Ensure the filenames match your files exactly (Case-Sensitive!)
workbox.precaching.precacheAndRoute([
  { url: 'Tts.html', revision: '3' },
  { url: 'manifest.json', revision: '3' },
  { url: 'icon.png', revision: '3' }
]);

// This "fetch" handler is REQUIRED for PWA installation
workbox.routing.registerRoute(
  ({ request }) => request.mode === 'navigate',
  new workbox.strategies.NetworkFirst()
);