import HoverDropdown from '../../dropdown/HoverDropdown'
import styled from '@emotion/styled'
import Icon from '../../icon'
import { fonts } from '@/styles/fonts'
import { colors } from '@/styles/colorPalette'

function LogoDropdown() {
  return (
    <LogoDropdownContainer>
      <HoverDropdown
        trigger={
          <HeaderLogo>
            <Icon name="IcUniswap" />
            <LogoLabel>Uniswap</LogoLabel>
            <Icon name="IcDropdown" size={12} color={colors.neutral2} />
          </HeaderLogo>
        }
      >
        <MenuList>
          <p>회사</p>
          <p>회사</p>
          <p>회사</p>
          <p>회사</p>
        </MenuList>
      </HoverDropdown>
    </LogoDropdownContainer>
  )
}

export default LogoDropdown

const LogoDropdownContainer = styled.div`
  padding: 8px;
`

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  width: 100%;
`

const LogoLabel = styled.p`
  font-size: ${fonts.size.large};
  line-height: ${fonts.lineHeight.large};
  font-weight: ${fonts.weight.book};
  color: ${colors.accent1};
`
