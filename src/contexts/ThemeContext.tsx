// src/contexts/ThemeContext.tsx
import { STORAGE_KEY } from '@/constants/storage'
import { getLocalStorage, setLocalStorage } from '@/utils/storage'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export type UserTheme = 'auto' | 'light' | 'dark'
type EffectiveTheme = 'light' | 'dark'

interface ThemeContextValue {
  theme: UserTheme
  onSwitchTheme: (theme: UserTheme) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function getSystemTheme(): EffectiveTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialUserTheme(): UserTheme {
  const stored = getLocalStorage<UserTheme | null>(STORAGE_KEY.THEME)
  if (stored === 'light' || stored === 'dark' || stored === 'auto') {
    return stored
  }
  return 'auto'
}

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [userTheme, setUserThemeState] = useState<UserTheme>(() => getInitialUserTheme())

  const effectiveTheme: EffectiveTheme = userTheme === 'auto' ? getSystemTheme() : userTheme

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', effectiveTheme)
    setLocalStorage<UserTheme>(STORAGE_KEY.THEME, userTheme)
  }, [userTheme, effectiveTheme])

  const handleSwitchTheme = useCallback((theme: UserTheme) => {
    setUserThemeState(theme)
  }, [])

  const values = useMemo(
    () => ({ theme: userTheme, onSwitchTheme: handleSwitchTheme }),
    [handleSwitchTheme, userTheme],
  )

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('ThemeContext 내부에서 사용해주세요')
  }
  return context
}
