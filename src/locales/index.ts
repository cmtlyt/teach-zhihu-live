import { createI18n } from 'vue-i18n'
import zh from './zh.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: { zh },
})
