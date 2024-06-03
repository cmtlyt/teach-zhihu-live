function initMock() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/teach-zhihu-live/mock-service-worker.js', { scope: '/teach-zhihu-live/' })
      .then((registration) => {
        console.log('SW registered scope:', registration.scope)
      })
      .catch((registrationError) => {
        console.log('SW registration failed:', registrationError)
      })
  } else {
    console.warn('当前浏览器不支持serviceWorker')
  }
}

initMock()
