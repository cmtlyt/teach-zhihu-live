import { verifySchema } from '../schema'

import { CACHE_NAME, ORIGIN } from './constant'

import { getType } from '.'

const STORAGE_KEY = new URL(ORIGIN)
let cache = null
const memoryCache = new Map()

function getUrlId(key) {
  return new URL(`${STORAGE_KEY.href}${key}`)
}

/**
 * @returns {Promise<Record<string,Record<string,any>>>}
 */
async function getData(key) {
  const tableId = getUrlId(key)
  return (
    memoryCache.get(tableId.href) ||
    cache.match(tableId).then(async (response) => {
      if (response) {
        const data = await response.json()
        let cacheData
        if (getType(data) === 'array') {
          cacheData = {}
          data.forEach((item) => (cacheData[item.id] = item))
          init(tableId.href, cacheData)
        }
        memoryCache.set(tableId.href, cacheData || data)
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
  return cache.put(getUrlId(key), createCacheData(value))
}

async function init(key, value) {
  const valueType = getType(value)
  if (!['object', 'array'].includes(valueType)) return
  return cache.keys().then(async (keys) => {
    const urlId = getUrlId(key)
    const cacheId = keys.find((item) => item.url === urlId.href)
    if (!cacheId) return cache.put(urlId, createCacheData(value))
    const data = await (await cache.match(cacheId)).json()
    if (getType(data) === valueType) return
    let newData
    if (valueType === 'object') {
      newData = Object.assign({}, value)
      data.forEach((item) => (newData[item.id] = item))
    } else {
      newData = [...value, ...Object.keys(data).map((item) => data[item])]
    }
    return cache.put(urlId, createCacheData(newData))
  })
}

async function findById(key, id) {
  const data = await getData(key)
  if (!(id in data)) return null
  return data[id]
}

async function find(key, { id, matcher }) {
  const data = await getData(key)
  matcher = matcher || ((item) => item.id === id)
  const result = []
  for (const key in data) {
    const item = data[key]
    if (matcher(item)) result.push(item)
  }
  return result
}

async function insert(key, value) {
  const data = await getData(key)
  const [verify, error, _data] = verifySchema(key, value)
  if (!verify) throw new Error(error)
  data[_data.id] = _data
  await cache.put(getUrlId(key), createCacheData(data))
  return _data
}

async function update(key, value) {
  const data = await getData(key)
  const id = value.id
  if (!(id in data)) return insert(key, value)
  const [verify, error, _data] = verifySchema(key, value)
  if (!verify) throw new Error(error)
  data[id] = Object.assign(data[id], _data)
  await cache.put(getUrlId(key), createCacheData(data))
  return _data
}

async function remove(key, value) {
  const data = await getData(key)
  const id = value.id
  if (!(id in data)) return
  delete data[id]
  return cache.put(getUrlId(key), createCacheData(data))
}

async function clear(key) {
  return cache.delete(getUrlId(key))
}

export const storage = { get, set, insert, update, remove, clear, find, init, findById }

export async function initStorage() {
  return caches.open(CACHE_NAME).then(async (_cache) => (cache = _cache))
}
