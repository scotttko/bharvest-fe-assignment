import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import { Global } from '@emotion/react'
import globalStyles from './styles/globalStyles.ts'
import { ThemeContextProvider } from './contexts/ThemeContext.tsx'
import '@/i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <Global styles={globalStyles} />
      <App />
    </ThemeContextProvider>
  </StrictMode>,
)
