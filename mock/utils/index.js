/* eslint-disable @typescript-eslint/no-unused-vars */
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

function randomString(len = 16, pre = '') {
  const str = pre + Math.random().toString(36).slice(2)
  if (str.length >= len) return str.slice(0, len)
  return str + randomString(len - str.length, str)
}

function getSecret(type) {
  if (type === 'access') return ACCESS_TOKEN_SECRET
  if (type === 'refresh') return REFRESH_TOKEN_SECRET
  throw new Error('不存在该类型令牌')
}

async function verifyToken(token, type = 'access') {
  const secret = getSecret(type)
  const result = await jwt.verify(token, secret)
  return result
}

async function signToken(payload, type = 'access', options = {}) {
  const secret = getSecret(type)
  return await jwt.sign(payload, secret, options)
}

async function getAccessToken(payload) {
  const accessToken = await signToken(payload, 'access', { expiresIn: '1d' })
  return accessToken
}

async function getRefreshToken(payload) {
  const refreshToken = await signToken(Object.assign({}, { data: payload }, { isRefresh: true }), 'refresh', {
    expiresIn: '30d',
  })
  return refreshToken
}

async function getTokens(payload) {
  const accessToken = await getAccessToken(payload)
  const refreshToken = await getRefreshToken(payload)
  return { accessToken, refreshToken }
}
