import { initSchema } from './schema'
import { initStorage } from './utils/storage'
import { mockHandler } from './handler'

function getHandlerFormController(controller, cur = mockHandler) {
  if (controller in cur) return cur[controller]
  const [key, newController] = controller.replace('.', '\n').split('\n')
  if (!key) return
  const handler = cur[key]
  if (!handler) return
  if (!newController) return handler
  return getHandlerFormController(newController, handler)
}

const mock = new Proxy(
  {},
  {
    get(_, key) {
      return getHandlerFormController(key)
    },
  }
)

function formatController(method, path) {
  return [method, ...path.split('/')].filter(Boolean).join('.')
}

async function formatResponse(data) {
  if (typeof data === 'object' && typeof data.then === 'function') data = await data
  if (data instanceof Response) return data
  if (typeof data === 'object' && data.__format) {
    return new Response(JSON.stringify(data.data), { status: data.status || 200 })
  }
  return new Response(JSON.stringify({ data, time: Date.now() }))
}

async function $__call(controller, ctx) {
  const handler = getHandlerFormController(controller)
  if (!handler) throw new Error(`未找到${controller}控制器`)
  return handler(ctx)
}

async function formatRequest(method, uri, request) {
  const data = method === 'get' ? {} : await request.json()
  const query = {}
  const headers = {}
  request.headers.entries().forEach(([key, value]) => (headers[key] = value))
  uri.searchParams.forEach((value, key) => (query[key] = value))
  return { data, query, headers, $__call }
}

export async function getMockData(splitPath, uri, request) {
  try {
    const method = request.method.toLowerCase()
    const mockHandler = mock[formatController(method, splitPath)]
    if (!mockHandler) return new Response(null, { status: 404 })
    const response = await formatResponse(
      mockHandler({
        uri,
        request,
        ...(await formatRequest(method, uri, request)),
      })
    )
    return response
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    })
  }
}

export async function initMockSystem() {
  await initStorage()
  await initSchema()
}
