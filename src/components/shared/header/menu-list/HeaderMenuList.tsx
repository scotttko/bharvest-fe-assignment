import styled from '@emotion/styled'
import HeaderMenu, { HeaderMenuItem } from './HeaderMenu'

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

const HEADER_MENU: HeaderMenuItem[] = [
  {
    label: '거래',
    path: '/swap',
    menu: [
      { label: '스왑', path: '/swap', iconName: 'IcSwap' },
      { label: '지정가 주문', path: '/limit', iconName: 'IcLimit' },
      { label: '보내기', path: '/send', iconName: 'IcSend' },
      { label: '구입하다', path: '/buy', iconName: 'IcBuy', iconSize: 28 },
    ],
  },
  {
    label: '탐색',
    path: '/explore',
    menu: [
      { label: '토큰', path: '/explore/tokens' },
      { label: '풀', path: '/explore/pools' },
      { label: '트랜잭션', path: '/explore/transactions' },
    ],
  },
  {
    label: '풀',
    path: '/positions',
    menu: [
      { label: '포지션 보기', path: '/positions' },
      { label: '포지션 생성', path: '/positions/create' },
    ],
  },
]
