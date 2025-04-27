const cacheName = 'assetmeow-cache-v1';
const assets = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// 安裝階段：快取必要資源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('📦 快取資源');
      return cache.addAll(assets);
    })
  );
});

// 啟用階段：可做舊快取清理（這裡簡單跳過）
self.addEventListener('activate', event => {
  console.log('🛠 Service Worker 啟用');
});

// 抓取資源：離線優先
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
