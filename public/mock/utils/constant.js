/* eslint-disable @typescript-eslint/no-unused-vars */
const CACHE_NAME = 'zhihu-live-v1'

const ORIGIN = location.origin

const ACCESS_TOKEN_SECRET = `${ORIGIN}_${CACHE_NAME}_ACCESS`

const REFRESH_TOKEN_SECRET = `${ORIGIN}_${CACHE_NAME}_REFRESH`

const PHONE_REG =
  /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/
