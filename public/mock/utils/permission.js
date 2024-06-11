// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { PermissionMap, checkPermission, formatPermission } = (() => {
  const PermissionMap = {
    // 查看数据库中的隐藏字段
    DB_SHOW_HIDDEN_FIELD: 0x1,
  }

  function checkPermission(userPermission, needPermission) {
    if (!needPermission) return true
    let permission = 0b0
    if (Array.isArray(needPermission)) needPermission.forEach((item) => (permission |= item))
    else permission = needPermission
    return (userPermission & permission) === permission
  }

  function formatPermission(...perms) {
    return perms.reduce((prev, cur) => prev | cur, 0b0)
  }

  return { PermissionMap, checkPermission, formatPermission }
})()
