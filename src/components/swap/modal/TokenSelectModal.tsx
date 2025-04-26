import Modal from '@/components/shared/modal'
import TokenSelectContents from './TokenSelectContents'
import { SwapAction } from '@/contexts/SwapContextProvider'

interface TokenSelectModalProps {
  isOpen: boolean
  onClose: () => void
  action: SwapAction
}

function TokenSelectModal({ isOpen, onClose, action }: TokenSelectModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Select a token">
      <TokenSelectContents action={action} onClose={onClose} />
    </Modal>
  )
}

export default TokenSelectModal
