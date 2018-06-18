importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/package-lock.json',
       '/package.json',
       '/src/css/styles.css',
       '/src/js/main.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {

console.log(event.request.url);

});