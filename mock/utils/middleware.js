/* eslint-disable @typescript-eslint/no-unused-vars */
function checkAuthentication(callback) {
  return async (props) => {
    const { headers } = props
    const authorization = headers.authorization
    if (!authorization?.startsWith('Bearer')) return { __format: true, status: 401, data: { message: '未授权' } }
    const token = authorization.split(' ')[1]
    const [verify, errorMessage, payload] = await verifyToken(token)
    if (!verify) return { __format: true, status: 401, data: { message: errorMessage } }
    if (payload.isRefresh) return { __format: true, status: 401, data: { message: 'refreshToken 无法认证' } }
    return callback(Object.assign(props, { tokenData: payload }))
  }
}
