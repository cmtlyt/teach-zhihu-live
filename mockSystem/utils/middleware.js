import { checkPermission } from './permission'

import { verifyToken } from '.'

export function checkAuthentication(callback) {
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

export function verifyUserPermission(callback, needPremission) {
  return checkAuthentication(async (props) => {
    const { tokenData } = props
    const { premission: userPremission } = tokenData
    if (checkPermission(userPremission, needPremission))
      return { __format: true, status: 403, data: { message: '无权限' } }
    return callback(props)
  })
}
