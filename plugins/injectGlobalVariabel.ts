import { Plugin, ResolvedConfig } from 'vite'

interface OptionsProps {
  globalVariabels: Record<string, any>
}

function flatObject(obj: Record<string, any>, prefix = '') {
  const result: Record<string, any> = {}
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      Object.assign(result, flatObject(obj[key], prefix + key + '.'))
    } else {
      result[prefix + key] = obj[key]
    }
  }
  return result
}

function unFlatObject(obj: Record<string, any>) {
  const result: Record<string, any> = {}
  for (const key in obj) {
    const keys = key.split('.')
    let current = result
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i]
      if (!current[k]) current[k] = {}
      current = current[k]
    }
    current[keys[keys.length - 1]] = obj[key]
  }
  return result
}

export function injectGlobalVariabel(options = {} as OptionsProps): Plugin {
  const store = {} as { config: ResolvedConfig; process: Record<string, any> }
  const needKeys = ['version', 'env.NODE_ENV', 'env.npm_package_version', 'env.npm_package_license']

  return {
    name: 'inject-global-variabel',
    configResolved(config) {
      store.config = config
      const flatProcess = flatObject(process)
      store.process = unFlatObject(JSON.parse(JSON.stringify(flatProcess, needKeys)))
    },
    transformIndexHtml() {
      const { globalVariabels = {} } = options
      const { base } = store.config
      const globalVariabelsJson = JSON.stringify(
        Object.assign({}, { baseUrl: base, process: store.process }, globalVariabels)
      )
      return [{ tag: 'script', injectTo: 'head-prepend', children: `__globalVariabels__ = ${globalVariabelsJson};` }]
    },
  }
}
