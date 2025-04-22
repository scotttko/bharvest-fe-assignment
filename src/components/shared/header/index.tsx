// import { IcUniswap } from '@/assets/icons'
// import IcUniswap from '@/assets/icons/uniswap-logo.svg?react'
import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import LogoDropdown from './menu-list/LogoDropdown'
import HeaderMenuList from './menu-list/HeaderMenuList'
import UserPreference from './user/UserPreference'
import { fonts } from '@/styles/fonts'
import SearchBar from './search/SearchBar'

function Header() {
  return (
    <HeaderContainer>
      <HeaderNav>
        <MenuSection>
          <LogoDropdown />
          <HeaderMenuList />
        </MenuSection>

        <SearchBar />

        <UserSection>
          <UserPreference />
          <WalletButton>Connect</WalletButton>
        </UserSection>
      </HeaderNav>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${colors.background};
  z-index: var(--header-zindex);
`

const HeaderNav = styled.nav`
  position: relative;
  z-index: var(--header-zindex);
  height: 72px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0px auto;
`

const MenuSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const WalletButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 12px;
  background-color: ${colors.accent2};
  color: ${colors.accent1};
  font-size: ${fonts.size.micro};
  line-height: 16px;
  font-weight: ${fonts.weight.medium};

  &:hover {
    background-color: ${colors.accent2Hovered};
  }
`
