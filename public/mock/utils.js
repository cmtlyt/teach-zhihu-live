/* eslint-disable @typescript-eslint/no-unused-vars */
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

function randomString(len = 16, pre = '') {
  const str = pre + Math.random().toString(36).slice(2)
  if (str.length >= len) return str.slice(0, len)
  return str + randomString(len - str.length, str)
}
