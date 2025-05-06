import HoverDropdown from '../../dropdown/HoverDropdown'
import styled from '@emotion/styled'
import { fonts } from '@/styles/fonts'
import { colors } from '@/styles/colorPalette'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../../icon'
import { HeaderMenuItem } from '@/models/header'
import { useTranslation } from 'react-i18next'

interface HeaderMenuProps {
  menu: HeaderMenuItem
}

function HeaderMenu({ menu }: HeaderMenuProps) {
  const location = useLocation()
  const isSelected = menu.menu.some((item) => item.path === location.pathname)
  const { t } = useTranslation()

  return (
    <HoverDropdown
      trigger={
        <MenuLabel to={menu.path} css={{ color: isSelected ? colors.color : colors.neutral2 }}>
          {t(`header.${menu.label}`)}
        </MenuLabel>
      }
    >
      <MenuList>
        {menu.menu.map((item) => (
          <MenuItem key={item.label} to={item.path}>
            {item.iconName && (
              <Icon name={item.iconName} size={item.iconSize ?? 24} color={colors.neutral2} />
            )}
            {t(`header.${item.label}`)}
          </MenuItem>
        ))}
      </MenuList>
    </HoverDropdown>
  )
}

export default HeaderMenu

const MenuLabel = styled(Link)`
  font-size: ${fonts.size.large};
  line-height: ${fonts.lineHeight.large};
  font-weight: ${fonts.weight.medium};
  padding: 0 8px;
`

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: 4px;
`

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${colors.neutral2};
  font-size: ${fonts.size.small};
  line-height: ${fonts.lineHeight.small};
  font-weight: ${fonts.weight.large};
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  background-color: ${colors.surface2};

  &:hover {
    background-color: ${colors.surface2Hovered};
  }
`
