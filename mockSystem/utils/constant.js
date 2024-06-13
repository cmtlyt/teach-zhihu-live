export const CACHE_NAME = 'zhihu-live-v1'

export const ORIGIN = location.origin

export const ACCESS_TOKEN_SECRET = `${ORIGIN}_${CACHE_NAME}_ACCESS`

export const REFRESH_TOKEN_SECRET = `${ORIGIN}_${CACHE_NAME}_REFRESH`

export const PHONE_REG =
  /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/
