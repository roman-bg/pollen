const CACHE_NAME = "agro-met-v4";

const urlsToCache = [
    "/",
    "/index.html",
    "/manifest.json",
    "/icon-192.png",
    "/icon-512.png"
];

// INSTALL
self.addEventListener("install", event => {
    self.skipWaiting(); // важно!
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// ACTIVATE (чисти стари кешове)
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );
    self.clients.claim();
});

// FETCH
self.addEventListener("fetch", event => {

    // 👉 НЕ кеширай външни API заявки
    if (event.request.url.includes("treebombs.xyz")) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
