const VERSION = 'v1';

self.addEventListener('install', (event) => {
  //Navegador instala el serviceWorker
  event.waitUntil(precache()); // promesa que espera a que ocurra la función de intercepción caché y resuelva o rechace
  // se crea un precache que recibe un conjunto de assets
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(cachedResponse(request)); // Esto va a buscar en caché
  event.waitUntil(updateCache(request)); // Esto va a buscar priemro en cache y luego ir a netwaork y actualizar caché
});

async function precache() {
  const cache = await caches.open(VERSION); // nos da una nstancia de un caché y regresa una promesa, por eso es asíncrona
  return cache.addAll([
    //conjunto de assets o archivos o recursos que recibe.
    // './',
    // './index.html',
    // './assets/index.js',
    // './assets/MediaPlayer.js',
    // './assets/plugins/AutoPlay.js',
    // './assets/plugins/AutoPause.js',
    // './assets/index.css',
    // './assets/video-2.mp4',
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}
