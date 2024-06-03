// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockHandler = {
  post: {
    async register({ data }) {
      const [user] = await storage.find('user', {
        matcher: (item) => item.name === data.name,
      })
      if (user) {
        return {
          success: false,
          message: '用户名已存在',
        }
      }
      try {
        const result = await storage.insert('user', data)
        return {
          success: true,
          message: result,
        }
      } catch (e) {
        return {
          success: false,
          message: e.message,
        }
      }
    },
    async login({ data }) {
      const [user] = await storage.find('user', {
        matcher: (item) => item.name === data.name && item.password === data.password,
      })
      if (!user)
        return {
          success: false,
          message: '用户名或密码错误',
        }
      return { success: true, user }
    },
  },
}
