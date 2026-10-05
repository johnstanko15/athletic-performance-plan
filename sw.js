const BUILD = "week16-sets-20261005";
const CACHE = "apt-native-v16-sets-20261005";
const ROOT_URL = new URL("./", self.registration.scope).href;
const INDEX_URL = new URL("./index.html", self.registration.scope).href;
const ASSETS = ["manifest.json", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "favicon-32.png"];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache=await caches.open(CACHE);
    // A deployment need only provide index.html; root navigation is aliased.
    const page=await fetch(INDEX_URL,{cache:"reload"});
    if(!page.ok) throw Error("Workout page unavailable");
    await cache.put(INDEX_URL,page.clone());
    await cache.put(ROOT_URL,page.clone());
    await Promise.allSettled(ASSETS.map(file=>cache.add(new Request(new URL(file,self.registration.scope),{cache:"reload"}))));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate",event=>{
  event.waitUntil((async()=>{
    await self.clients.claim();
    const names=await caches.keys();
    await Promise.all(names.filter(name=>name.startsWith("apt-native-v") && name!==CACHE).map(name=>caches.delete(name)));
    const clients=await self.clients.matchAll({type:"window"});
    clients.forEach(client=>client.postMessage({type:"SBC_BUILD",build:BUILD}));
  })());
});

self.addEventListener("message",event=>{
  if(event.data?.type==="SBC_GET_BUILD") event.source?.postMessage({type:"SBC_BUILD",build:BUILD});
});

async function programPage(request){
  const cache=await caches.open(CACHE);
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),6000);
  try{
    // HTML contains the complete program and logger. Always request it fresh.
    const response=await fetch(request,{cache:"no-store",signal:controller.signal});
    if(!response.ok) return (await cache.match(INDEX_URL)) || response;
    try{
      await cache.put(INDEX_URL,response.clone());
      await cache.put(ROOT_URL,response.clone());
    }catch(_){} // Storage failure must not hide a successfully fetched page.
    return response;
  }catch(_){
    return (await cache.match(INDEX_URL)) || new Response("Reconnect to load the workout page.",{
      status:503,headers:{"Content-Type":"text/plain; charset=utf-8"}
    });
  }finally{clearTimeout(timeout);}
}

self.addEventListener("fetch",event=>{
  const request=event.request;
  const url=new URL(request.url);
  if(request.method!=="GET" || url.origin!==self.location.origin) return;
  const htmlRequest=url.pathname===new URL(INDEX_URL).pathname || url.pathname===new URL(ROOT_URL).pathname;
  if(htmlRequest){event.respondWith(programPage(request));return;}
  // Other documents and pages on this origin are outside this workout cache.
  if(request.mode==="navigate") return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    return (await cache.match(request)) || fetch(request);
  })());
});
