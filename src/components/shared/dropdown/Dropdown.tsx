import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import { AnimatePresence, motion, Variants } from 'motion/react'
import { PropsWithChildren, ReactNode, useState } from 'react'

interface DropdownProps extends PropsWithChildren {
  trigger: ReactNode
  minWidth?: number
  position?: 'center' | 'left' | 'right'
  animation?: 'fade-up' | 'zoom-in'
}

function Dropdown({
  trigger,
  children,
  minWidth = 200,
  position = 'left',
  animation = 'zoom-in',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <DropdownContainer>
        <TriggerSection onClick={() => setIsOpen(true)}>{trigger}</TriggerSection>

        <AnimatePresence>
          {isOpen && (
            <DropdownWrapper
              key={'dropdown'}
              initial="close"
              animate="open"
              exit="close"
              variants={animation === 'fade-up' ? fadeUpVariants : zoomInVariants}
              // transition={{ duration: 0.2 }}
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
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 6px;
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

const fadeUpVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  close: {
    opacity: 0,
    y: -15,
  },
}

const zoomInVariants: Variants = {
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  close: {
    opacity: 0,
    scale: 0.95,
    y: -4,
  },
}
