// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { getMockData, initMockSystem } = (() => {
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
    return new Response(JSON.stringify({ data, time: Date.now() }))
  }

  async function formatRequest(method, uri, request) {
    const data = method === 'get' ? {} : await request.json()
    const query = {}
    uri.searchParams.forEach((value, key) => (query[key] = value))
    return { data, query }
  }

  async function getMockData(splitPath, uri, request) {
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

  async function initMockSystem() {
    await initStorage()
    await initSchema()
  }

  return { getMockData, initMockSystem }
})()
