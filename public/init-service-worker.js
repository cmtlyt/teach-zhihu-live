function initMock() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register(`${window.__globalVariabels__.baseUrl}mock-service-worker.js`, {
        scope: `${window.__globalVariabels__.baseUrl}`,
      })
      .then((registration) => {
        console.debug('SW registered scope:', registration.scope)
      })
      .catch((registrationError) => {
        console.debug('SW registration failed:', registrationError)
      })
  } else {
    console.warn('当前浏览器不支持serviceWorker')
  }
}

initMock()
