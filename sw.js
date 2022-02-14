 (function(){
    self.addEventListener('install',e=>{
        console.log('service worker installing');
        self.skipWaiting();
    })
    self.addEventListener('activate',e=>{
        console.log('service worker is activating...')
    })
    self.addEventListener('fetch',e=>{
        console.log('fetching',e.request.url);
    })
})
