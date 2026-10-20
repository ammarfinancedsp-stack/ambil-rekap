// Service worker minimal: membuat halaman bisa diinstal. Data tetap online (Apps Script).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
