// Сгенерировано tools/build.py — не редактируйте вручную.
const V='v-29f23e4852';
const SHELL=['./','index.html','config.js','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png','images/beard.jpg','images/clipper-beard.jpg','images/clipper.jpg','images/cut-beard.jpg','images/cut.jpg','images/facade.jpg','images/g-camo.jpg','images/g-clay.jpg','images/g-crop.jpg','images/g-kid.jpg','images/g-lounge.jpg','images/g-mask.jpg','images/g-street.jpg','images/g-teen.jpg','images/hero.jpg','images/kids.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const same=new URL(e.request.url).origin===location.origin;
  e.respondWith((same?fetch(e.request.url,{cache:'no-cache'}):fetch(e.request)).then(r=>{const c=r.clone();caches.open(V).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
});
