import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import type { I18nOptions, I18n } from 'vue-i18n'

const localesMap = {
  zh: () => import('./zh.json'),
}

type TLocale = keyof typeof localesMap

const defualtOptions: I18nOptions = {
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
}

export const SUPPORT_LOCALES = Object.keys(localesMap)

let i18n: I18n

export function setupI18n(options = defualtOptions) {
  i18n ??= createI18n(options)
  setI18nLanguage(options.locale! as TLocale)
  return i18n
}

export async function setI18nLanguage(locale: string) {
  if (!locale) return
  if (!SUPPORT_LOCALES.includes(locale)) return
  // @ts-ignore
  await loadLocaleMessages(locale as TLocale)
  if (i18n.mode === 'legacy') i18n.global.locale = locale
  // @ts-ignore
  else i18n.global.locale.value = locale
  document.querySelector('html')?.setAttribute('lang', locale)
}

async function loadLocaleMessages(locale: TLocale) {
  const messages = await localesMap[locale]()
  i18n.global.setLocaleMessage(locale, messages.default)
  return nextTick()
}
