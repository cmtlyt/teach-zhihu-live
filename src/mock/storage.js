const { storage, initStorage } = (() => {
  const CACHE_NAME = "zhihu-live-v1";
  const STORAGE_KEY = new URL(location.origin);
  let cache = null;
  const memoryCache = new Map();

  function urlId(key) {
    return new URL(`${STORAGE_KEY.href}${key}`);
  }

  async function getData(key) {
    const tableId = urlId(key);
    return (
      memoryCache.get(tableId.href) ||
      cache.match(tableId).then(async (response) => {
        console.log(1);
        if (response) {
          const data = await response.json();
          memoryCache.set(tableId.href, data);
          return data;
        }
        return null;
      })
    );
  }

  function createCacheData(value) {
    return new Response(JSON.stringify(value));
  }

  async function get(key) {
    return getData(key);
  }

  async function set(key, value) {
    return cache.put(urlId(key), createCacheData(value));
  }

  async function find(key, { id }) {
    const data = await get(key);
    return data.filter((item) => (item.id = id));
  }

  async function insert(key, value) {
    const data = await get(key);
    data.push(value);
    return cache.put(urlId(key), createCacheData(data));
  }

  async function update(key, value) {
    const data = await get(key);
    const index = data.findIndex((item) => item.id === value.id);
    data[index] = Object.assign(data[index], value);
    return cache.put(urlId(key), createCacheData(data));
  }

  async function remove(key, value) {
    const data = await get(key);
    const index = data.findIndex((item) => item.id === value.id);
    data.splice(index, 1);
    return cache.put(urlId(key), createCacheData(data));
  }

  async function clear(key) {
    return cache.delete(urlId(key));
  }

  const storage = { get, set, insert, update, remove, clear, find };

  async function initStorage() {
    return caches.open(CACHE_NAME).then(async (_cache) => (cache = _cache));
  }

  return { storage, initStorage };
})();
