import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import { PropsWithChildren, ReactNode, useState } from 'react'

interface DropdownProps extends PropsWithChildren {
  trigger: ReactNode
  minWidth?: number
  position?: 'center' | 'left' | 'right'
}

function Dropdown({ trigger, children, minWidth = 200, position = 'left' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <DropdownContainer>
        <TriggerSection onClick={() => setIsOpen(true)}>{trigger}</TriggerSection>

        <AnimatePresence>
          {isOpen && (
            <DropdownWrapper
              initial={{ opacity: 0, scale: 0.95, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.2 }}
              css={{
                minWidth,
                ...(position === 'left'
                  ? { left: 0 }
                  : position === 'right'
                  ? { right: 0 }
                  : { left: '50%', transform: 'translateX(-50%)' }),
              }}
            >
              {children}
            </DropdownWrapper>
          )}
        </AnimatePresence>
      </DropdownContainer>
      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}
    </>
  )
}

export default Dropdown

const DropdownContainer = styled.div`
  position: relative;
`

const TriggerSection = styled.button``

const DropdownWrapper = styled(motion.div)`
  position: absolute;
  top: 100%;
  margin-top: 8px;
  border-radius: 16px;
  background-color: ${colors.surface1};
  border: 1px solid ${colors.surface2};
  z-index: var(--alert-zindex);
`

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: var(--dimmed-zindex);
`
