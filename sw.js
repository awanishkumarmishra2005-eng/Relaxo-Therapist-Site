var C = "relaxo-v1";
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(C).then(function(c){ return c.addAll(["/", "/index.html", "/icon.svg", "/manifest.webmanifest"]); }));
  self.skipWaiting();
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(k){ return Promise.all(k.filter(function(x){ return x !== C; }).map(function(x){ return caches.delete(x); })); }));
  self.clients.claim();
});
self.addEventListener("fetch", function(e){
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(function(r){
    var copy = r.clone(); caches.open(C).then(function(c){ c.put(e.request, copy); }); return r;
  }).catch(function(){ return caches.match(e.request).then(function(m){ return m || caches.match("/index.html"); }); }));
});
