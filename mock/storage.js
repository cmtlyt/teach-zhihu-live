// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { storage, initStorage } = (() => {
  const CACHE_NAME = 'zhihu-live-v1'
  const STORAGE_KEY = new URL(location.origin)
  let cache = null
  const memoryCache = new Map()

  function urlId(key) {
    return new URL(`${STORAGE_KEY.href}${key}`)
  }

  async function getData(key) {
    const tableId = urlId(key)
    return (
      memoryCache.get(tableId.href) ||
      cache.match(tableId).then(async (response) => {
        if (response) {
          const data = await response.json()
          memoryCache.set(tableId.href, data)
          return data
        }
        return null
      })
    )
  }

  function createCacheData(value) {
    return new Response(JSON.stringify(value))
  }

  async function get(key) {
    return getData(key)
  }

  async function set(key, value) {
    return cache.put(urlId(key), createCacheData(value))
  }

  async function init(key, value) {
    return cache.keys().then((keys) => {
      if (!keys.some((item) => item.url === urlId(key).href)) {
        return cache.put(urlId(key), createCacheData(value))
      }
    })
  }

  async function find(key, { id, matcher }) {
    const data = await getData(key)
    matcher = matcher || ((item) => item.id === id)
    return data.filter(matcher)
  }

  async function insert(key, value) {
    const data = await getData(key)
    const [verify, error, _data] = verifySchema(key, value)
    if (!verify) throw new Error(error)
    data.push(_data)
    return cache.put(urlId(key), createCacheData(data))
  }

  async function update(key, value) {
    const data = await getData(key)
    const index = data.findIndex((item) => item.id === value.id)
    if (index === -1) throw new Error('not found')
    const [verify, error, _data] = verifySchema(key, value)
    if (!verify) throw new Error(error)
    data[index] = Object.assign(data[index], _data)
    return cache.put(urlId(key), createCacheData(data))
  }

  async function remove(key, value) {
    const data = await getData(key)
    const index = data.findIndex((item) => item.id === value.id)
    if (index === -1) return
    data.splice(index, 1)
    return cache.put(urlId(key), createCacheData(data))
  }

  async function clear(key) {
    return cache.delete(urlId(key))
  }

  const storage = { get, set, insert, update, remove, clear, find, init }

  async function initStorage() {
    return caches.open(CACHE_NAME).then(async (_cache) => (cache = _cache))
  }

  return { storage, initStorage }
})()
