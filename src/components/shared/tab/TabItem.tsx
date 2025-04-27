import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import Icon, { IconName } from '../icon'
import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { TabTrans } from '@/models/header'

interface TabItemProps {
  label?: TabTrans
  icon?: IconName
  isActive: boolean
  onClick: () => void
}

const TabItem = forwardRef<HTMLButtonElement, TabItemProps>(
  ({ label, icon, isActive, onClick }, ref) => {
    const { t } = useTranslation()
    return (
      <TabItemContainer ref={ref} onClick={onClick}>
        {icon ? (
          <Icon name={icon} size={20} color={colors.color} />
        ) : (
          label && (
            <p css={{ color: isActive ? colors.color : colors.neutral2 }}>{t(`tab.${label}`)}</p>
          )
        )}
      </TabItemContainer>
    )
  },
)

export default TabItem

const TabItemContainer = styled.button`
  position: relative;
  height: 32px;
  padding: 8px 12px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;

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
