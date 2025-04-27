import Modal from '@/components/shared/modal'
import TokenSelectContents from './TokenSelectContents'
import { SwapAction } from '@/models/tokens'
import { useTranslation } from 'react-i18next'

interface TokenSelectModalProps {
  isOpen: boolean
  onClose: () => void
  action: SwapAction
}

function TokenSelectModal({ isOpen, onClose, action }: TokenSelectModalProps) {
  const { t } = useTranslation()

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('swap-token-select.title')}>
      <TokenSelectContents action={action} onClose={onClose} />
    </Modal>
  )
}

export default TokenSelectModal
