// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockHandler = {
  post: {
    async register({ data }) {
      const [user] = await storage.find('user', {
        matcher: (item) => item.name === data.name,
      })
      if (user) {
        return { __format: true, status: 400, data: { message: '用户名已存在' } }
      }
      try {
        const user = await storage.insert('user', data)
        return { success: true, ...(await getTokens({ id: user.id, role: user.role })) }
      } catch (e) {
        return { __format: true, status: 500, data: { message: e.message } }
      }
    },
    async login({ data }) {
      const [user] = await storage.find('user', {
        matcher: (item) => item.name === data.name && item.password === data.password,
      })
      if (!user) return { __format: true, status: 400, data: { message: '用户名或密码错误' } }
      return { success: true, ...(await getTokens({ id: user.id, role: user.role })) }
    },
    async checkCaptcha({ data }) {
      const { captcha, captchaId } = data
      if (!captcha) return { __format: true, status: 400, data: { message: '验证码不能为空' } }
      if (!captchaId) return { __format: true, status: 400, data: { message: '验证码ID不能为空' } }
      const sessionInfo = await storage.findById('session', captchaId)
      if (!sessionInfo) return { __format: true, status: 400, data: { message: '验证码不存在' } }
      if (sessionInfo.expireTime < new Date()) {
        await storage.remove('session', sessionInfo)
        return { __format: true, status: 400, data: { message: '验证码已过期' } }
      }
      const sessionData = JSON.parse(sessionInfo.info)
      if (sessionData.captcha !== captcha) return { __format: true, status: 400, data: { message: '验证码错误' } }
      await storage.remove('session', sessionInfo)
      return { success: true }
    },
  },
  get: {
    async captcha({ query }) {
      if (!query.phone) return { __format: true, status: 400, data: { message: '手机号不能为空' } }
      const captcha = randomString(6)
      const sectionInfo = await storage.update('session', {
        id: randomString(16),
        info: JSON.stringify({ phone: query.phone, captcha }),
      })
      return { success: true, captchaId: sectionInfo.id, captcha }
    },
    async refresh({ query }) {
      if (!query.refreshToken) return { __format: true, status: 400, data: { message: 'refreshToken不能为空' } }
      const [verify, errorMessage, payload] = await verifyToken(query.refreshToken, 'refresh')
      if (!verify) return { __format: true, status: 401, data: { message: errorMessage } }
      const { isRefresh, data } = payload
      if (!isRefresh) return { __format: true, status: 401, data: { message: 'refreshToken无效' } }
      return { success: true, ...getTokens(data) }
    },
    test: checkAuthentication(async ({ tokenData }) => {
      return { success: true, ...tokenData }
    }),
  },
}
