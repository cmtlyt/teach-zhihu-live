type GlobalVariabels = {
  baseUrl: string
  process: {
    version: string
    env: {
      NODE_ENV: string
      npm_package_version: string
      npm_package_license: string
    }
  }
}

declare namespace globalThis {
  interface Window {
    __globalVariabels__: GlobalVariabels
  }
}
