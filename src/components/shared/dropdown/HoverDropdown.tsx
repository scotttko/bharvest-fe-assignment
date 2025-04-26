import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'motion/react'
import { PropsWithChildren, ReactNode, useState } from 'react'

interface HoverDropdownProps extends PropsWithChildren {
  trigger: ReactNode
  minWidth?: number
}

function HoverDropdown({ trigger, children, minWidth = 200 }: HoverDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HoverDropdownContainer
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <TriggerSection>{trigger}</TriggerSection>

      <AnimatePresence>
        {isOpen && (
          <DropdownWrapper
            key={'hover-dropdown'}
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.2 }}
            css={{ minWidth }}
          >
            {children}
          </DropdownWrapper>
        )}
      </AnimatePresence>
    </HoverDropdownContainer>
  )
}

export default HoverDropdown

const HoverDropdownContainer = styled.div`
  position: relative;
`

const TriggerSection = styled.div`
  cursor: pointer;
`

const DropdownWrapper = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  border-radius: 16px;
  background-color: ${colors.surface1};
  border: 1px solid ${colors.surface2};
`
