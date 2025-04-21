// import { IcUniswap } from '@/assets/icons'
// import IcUniswap from '@/assets/icons/uniswap-logo.svg?react'
import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import Icon from '../icon'

function Header() {
  return (
    <HeaderContainer>
      <HeaderNav>
        <Icon name="IcUniswap" />
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
