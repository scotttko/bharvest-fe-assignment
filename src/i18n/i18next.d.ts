import 'i18next'
import en from '@/i18n/locales/en.json'
import ko from '@/i18n/locales/ko.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ko'
    resources: {
      ko: typeof ko
      en: typeof en
    }
  }
}
