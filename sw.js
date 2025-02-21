/*const CACHE_NAME = "jokenpo-pwa-v1";
const ASSETS = [
    "/",
    "/index.html",
    "/style.css",
    "/script.js",
    "/manifest.json",
    "/img/pedra.png",
    "/img/papel.png",
    "/img/tesoura.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Cache criado!");
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
});
*/

const CACHE_NAME = "jokenpo-pwa-v2";
const ASSETS = [
    "/",
    "/index.html",
    "/style.css",
    "/script.js",
    "/manifest.json",
    "/img/pedra.png",
    "/img/papel.png",
    "/img/tesoura.png"
];

// Instalação do Service Worker e cache dos arquivos
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Cache criado!");
            return cache.addAll(ASSETS);
        })
    );
});

// Interceptar requisições e servir os arquivos do cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).catch(() => {
                return new Response("Você está offline. Tente novamente mais tarde.", {
                    headers: { "Content-Type": "text/plain" }
                });
            });
        })
    );
});

// Atualizar o cache quando houver mudanças
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
});
