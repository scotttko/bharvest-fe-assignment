import Tab from '@/components/shared/tab/Tab'
import { THEME_TABS } from '@/constants/pref'
import { UserTheme, useTheme } from '@/contexts/ThemeContext'
import { useCallback } from 'react'

function ThemeSwitch() {
  const { theme, onSwitchTheme } = useTheme()

  const handleThemeSwitch = useCallback(
    (tab: UserTheme) => {
      onSwitchTheme(tab)
    },
    [onSwitchTheme],
  )

  return <Tab tabs={THEME_TABS} activeTab={theme} onChange={handleThemeSwitch} />
}

export default ThemeSwitch
