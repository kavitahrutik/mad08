var mycache = "mycache";
var assests = [
"/",
"/my.html",
"/img/bathroomprod.jpg",
"/img/download.jpg",
"/img/headphone.jpeg",
"/img/cosmetics.jpg",
"/js/start.js",
"/sw.js",
"/manifest.json",
];
self.addEventListener('install', event => {
console.log('inside the install', event);
caches.open(mycache)

.then(cache => {
cache.addAll(assests);
});
});

self.addEventListener('activate', event => {
console.log('inside the activate', event);
});
self.addEventListener('fetch', async (event) => {
event.respondWith(
caches.match(event.request)
.then(respevt => {
return respevt || fetch(event.request);

})
);
console.log('inside the fetched', event);
});