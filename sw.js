// Tower Spotter: offline cache for the gate and the encrypted build. Scope = this folder only.
const V = '0.1.0-beta-20260904-2046'; const C = 'tspot-' + V;
const FILES = ['./', './index.html', './payload.enc', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('tspot-') && k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url); if (e.request.method !== 'GET' || !u.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request).then(n => { if (n.ok) caches.open(C).then(c => c.put(e.request, n.clone())); return n; })));
});
