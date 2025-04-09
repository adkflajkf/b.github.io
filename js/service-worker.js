// service-worker.js
self.addEventListener('fetch', event => {
    const blockedUrls = ['https://ngr777.com/', 'https://s.shopee.com.br/', 'https://kezootsooh.net/', 'https://aliexpress.com/', 'https://crummydevioussucculent.com/', 'https://xml-v4.glcsrv.com/'];
    
    if (blockedUrls.some(url => event.request.url.includes(url))) {
        event.respondWith(new Response('', { status: 204 })); // Responde com vazio para bloquear
    } else {
        event.respondWith(fetch(event.request)); // Permite outros pedidos
    }
});
