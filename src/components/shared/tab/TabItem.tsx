import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

interface TabItemProps {
  label: string
  isActive: boolean
  onClick: () => void
}

function TabItem({ label, isActive, onClick }: TabItemProps) {
  return (
    <TabItemContainer onClick={onClick}>
      <p css={{ color: isActive ? colors.color : colors.neutral2 }}>{label}</p>

      {isActive && (
        <motion.div
          className="underline"
          layoutId="underline"
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        />
      )}
    </TabItemContainer>
  )
}

export default TabItem

const TabItemContainer = styled.button`
  position: relative;
  height: 32px;
  padding: 8px 12px;
  border-radius: 32px;
  display: flex;
  align-items: center;

  p {
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
  }

  .underline {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 32px;
    background: ${colors.surface3};
    z-index: 0;
    border-radius: 32px;
  }

  &:hover {
    color: ${colors.color};

    .underline {
      background: ${colors.surface3Hovered};
    }
  }
`
