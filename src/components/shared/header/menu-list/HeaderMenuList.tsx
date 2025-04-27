import styled from '@emotion/styled'
import HeaderMenu from './HeaderMenu'
import { HEADER_MENU } from '@/constants/header'

function HeaderMenuList() {
  return (
    <HeaderMenuListContainer>
      {HEADER_MENU.map((menu) => (
        <HeaderMenu key={menu.label} menu={menu} />
      ))}
    </HeaderMenuListContainer>
  )
}

export default HeaderMenuList

const HeaderMenuListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
