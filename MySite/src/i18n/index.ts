import { createI18n } from "vue-i18n"
import { Locale } from '@/eunms'

import en from './locale/en'
import zh from './locale/zh'

const messages = { en, zh }

const [locale, fallbackLocale] = /^zh\b/.test(window.navigator.language)
  ? [Locale.ZH, Locale.EN]
  : [Locale.EN, Locale.ZH]

export default createI18n({
  //添加以下选项，否则报错Not available in legacy mode
  legacy: false, 

  locale,
  fallbackLocale,
  messages,
})