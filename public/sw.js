const staticCacheName = "static-site-v1"
const dynamicCacheName = "dynamic-site-v1"

const ASSETS = [
    'http://localhost:5173',
    '/index.html',
    '/src/styles/index.scss',
    '/src/main.tsx',
    '/public/manifest.json',
    '/src/shared/assets/RickandMorty.png',
    '/src/shared/assets/hello_icon.webp',
    '/src/shared/assets/rick-sanchez-100.png',
    '/src/shared/assets/rick-sanchez-400.png'
]

self.addEventListener('install', async (event) => {
    const cache = await caches.open(staticCacheName)
    await cache.addAll(ASSETS)
})

self.addEventListener('activate', async (event) => {
    const cachesKeys = await caches.keys()
    await Promise.all(cachesKeys.filter(key => key !== staticCacheName && key !== dynamicCacheName)).map(key => caches.delete(key))
})
    
self.addEventListener("fetch", (event) => {
    event.respondWith(
        cacheFirst(event.request)
    )
})

async function cacheFirst(request) {
    const cache = await caches.match(request)
    try {
        return cache ?? await fetch(request).then(response => {
            return netWorkFirst(request)
        })
    }catch (error) {
        return netWorkFirst(request)
    }
}

async function netWorkFirst(request) {
    const cache = await caches.open(dynamicCacheName)
    try {
        const response = await fetch(request)
        await cache.put(request, response.clone())
        return response
    } catch (error) {
        const cache = await caches.match(request)
        return cache ?? await cache.match('/http://localhost:5173')
    }
}
