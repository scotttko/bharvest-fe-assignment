import { IconName } from '@/components/shared/icon'
import { UserTheme } from '@/contexts/ThemeContext'
import en from '@/i18n/locales/en.json'

export type HeaderTrans = keyof (typeof en)['header']
export type TabTrans = keyof (typeof en)['tab']

export interface HeaderMenuItem {
  label: HeaderTrans
  path: string
  menu: {
    label: HeaderTrans
    path: string
    iconName?: IconName
    iconSize?: number
  }[]
}

export interface ThemeTab {
  label?: TabTrans
  value: UserTheme
  icon?: IconName
}

export interface LangItem {
  label: HeaderTrans
  lang: 'ko' | 'en'
}
