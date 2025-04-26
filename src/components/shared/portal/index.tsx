import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

function Portal({ children }: PropsWithChildren) {
  const $portalRoot = document.getElementById('portal-root')

  if (!$portalRoot) {
    return null
  }

  return createPortal(<>{children}</>, $portalRoot)
}

export default Portal
