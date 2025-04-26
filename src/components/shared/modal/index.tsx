import { AnimatePresence, motion, Variants } from 'motion/react'
import Portal from '../portal'
import styled from '@emotion/styled'
import { colors } from '@/styles/colorPalette'
import { fonts } from '@/styles/fonts'
import Icon from '../icon'
import { PropsWithChildren } from 'react'

interface ModalProps extends PropsWithChildren {
  isOpen: boolean
  onClose: () => void
  title?: string
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <Wrapper key={`modal-${title}`}>
            <ModalContainer initial="close" animate="open" exit="close" variants={modalVariants}>
              <ModalHeader>
                {title && <HeaderTitle>{title}</HeaderTitle>}
                <CloseButton onClick={onClose}>
                  <Icon name="IcClose" color={colors.neutral2} size={24} />
                </CloseButton>
              </ModalHeader>

              <ModalContents>{children}</ModalContents>
            </ModalContainer>
          </Wrapper>
        )}

        {isOpen && (
          <Dim
            initial="close"
            animate="open"
            exit="close"
            variants={opacityVariants}
            onClick={onClose}
          />
        )}
      </AnimatePresence>
    </Portal>
  )
}

export default Modal

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--modal-zindex);
`

const ModalContainer = styled(motion.div)`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 6px;
  padding: 16px 16px 0;
  border: 1px solid ${colors.surface3};
  border-radius: 16px;
  background-color: ${colors.surface1};
  min-width: 400px;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const HeaderTitle = styled.p`
  font-size: ${fonts.size.large};
  line-height: ${fonts.lineHeight.large};
  font-weight: ${fonts.weight.book};
  color: ${colors.neutral1};
`

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Dim = styled(motion.div)`
  position: fixed;
  z-index: var(--dimmed-zindex);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.scrim};
  opacity: 0.5;
`

const opacityVariants: Variants = {
  open: {
    opacity: 0.5,
    transition: { duration: 0.1 },
  },
  close: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

const modalVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1 },
  },
  close: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.2 },
  },
}
