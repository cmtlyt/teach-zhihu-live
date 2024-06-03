importScripts('./mock.js', './mockHandler.js', './storage.js')

self.addEventListener('activate', (event) => {
  event.waitUntil(initMockSystem())
})

const API_REG = /^\/api\/(.*)/

self.addEventListener('fetch', (event) => {
  const uri = new URL(event.request.url)
  const [, splitPath] = Array.from(API_REG.exec(uri.pathname) || [])
  if (!splitPath) return
  event.respondWith(getMockData(splitPath, uri, event.request))
})
