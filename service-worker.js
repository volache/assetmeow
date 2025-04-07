self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("assetmeow-v1").then(cache =>
      cache.addAll([
        "/assetmeow/",
        "/assetmeow/index.html",
        "/assetmeow/icon-192.png"
      ])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
