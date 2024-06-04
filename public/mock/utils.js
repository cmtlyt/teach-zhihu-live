/* eslint-disable @typescript-eslint/no-unused-vars */
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}
