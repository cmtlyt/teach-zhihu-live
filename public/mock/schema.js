/* eslint-disable @typescript-eslint/no-unused-vars */
const { verifySchema, initSchema, formatDto } = (() => {
  const { DB_SHOW_HIDDEN_FIELD } = PermissionMap

  const dbSchema = {
    user: {
      id: { type: 'string', default: () => randomString(16), permission: formatPermission(DB_SHOW_HIDDEN_FIELD) },
      name: { type: 'string', required: true },
      password: { type: 'string', required: true, permission: formatPermission(DB_SHOW_HIDDEN_FIELD) },
      age: { type: 'number' },
      sex: { type: 'string' },
      email: { type: 'string' },
      phone: { type: 'string', verify: (value) => PHONE_REG.test(value) },
      permission: { type: 'number', defautl: () => 0, permission: formatPermission(DB_SHOW_HIDDEN_FIELD) },
      createTime: { type: 'date', default: () => new Date(), permission: formatPermission(DB_SHOW_HIDDEN_FIELD) },
      updateTime: {
        type: 'date',
        default: () => new Date(),
        autoUpdate: true,
        permission: formatPermission(DB_SHOW_HIDDEN_FIELD),
      },
      avatar: { type: 'string' },
      isDeleted: { type: 'boolean', defualt: () => false, permission: formatPermission(DB_SHOW_HIDDEN_FIELD) },
    },
    session: {
      id: { type: 'string', default: () => randomString(16) },
      info: { type: 'string', required: true },
      createTime: { type: 'date', default: () => new Date() },
      expireTime: { type: 'date', default: () => new Date(new Date().getTime() + 1000 * 60 * 5) },
    },
  }

  async function initSchema() {
    await Promise.all(Object.keys(dbSchema).map((dbName) => storage.init(dbName, {})))
  }

  function getTypeDefaultValue(type) {
    const typeMap = {
      string: '',
      number: 0,
      boolean: false,
      date: new Date(),
      array: [],
      object: {},
    }
    return typeMap[type]
  }

  function verifySchema(dbName, data) {
    const tbSchema = dbSchema[dbName]
    if (!tbSchema) return [false, `未找到${dbName}表`]
    const newData = { ...data }
    const autoUpdateField = []
    for (const key in tbSchema) {
      // 必填验证
      if (tbSchema[key].required && !newData[key]) return [false, `缺少${key}字段`]
      // 处理默认值
      if (tbSchema[key].default && !newData[key]) newData[key] = tbSchema[key].default()
      // 类型验证
      if (tbSchema[key].required && getType(newData[key]) !== tbSchema[key].type)
        return [false, `字段${key}类型错误, 期望${tbSchema[key].type}, 实际${getType(newData[key])}`]
      if (tbSchema[key].verify && newData[key] && !tbSchema[key].verify(newData[key]))
        return [false, `字段${key}验证失败`]
      // 暂存自动更新
      if (tbSchema[key].autoUpdate) autoUpdateField.push(key)
    }
    // 处理自动更新
    for (const key of autoUpdateField) newData[key] = tbSchema[key].default()
    return [true, null, newData]
  }

  function formatDto(schemaId, data, userPermission) {
    const schema = dbSchema[schemaId]
    if (!schema) return data
    const newData = { ...data }
    for (const key in schema) {
      if (!checkPermission(userPermission, schema[key].permission)) delete newData[key]
      else if (!newData[key]) newData[key] = getTypeDefaultValue(schema[key].type)
    }
    return newData
  }

  return { verifySchema, initSchema, formatDto }
})()
