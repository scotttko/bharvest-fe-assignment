import { LangItem, ThemeTab } from '@/models/header'

export const THEME_TABS: ThemeTab[] = [
  { label: 'theme-auto', value: 'auto' },
  {
    value: 'light',
    icon: 'IcLight',
  },
  {
    value: 'dark',
    icon: 'IcDark',
  },
]

export const LANGUAGES: LangItem[] = [
  { label: 'lang-en', lang: 'en' },
  {
    label: 'lang-ko',
    lang: 'ko',
  },
]
