import styled from '@emotion/styled'
import HeaderMenu from './HeaderMenu'
import { HeaderMenuItem } from '@/models/header'

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
    label: 'nav-trade',
    path: '/swap',
    menu: [
      { label: 'nav-trade-swap', path: '/swap', iconName: 'IcSwap' },
      { label: 'nav-trade-limit', path: '/limit', iconName: 'IcLimit' },
      { label: 'nav-trade-send', path: '/send', iconName: 'IcSend' },
      { label: 'nav-trade-buy', path: '/buy', iconName: 'IcBuy', iconSize: 28 },
    ],
  },
  {
    label: 'nav-explore',
    path: '/explore',
    menu: [
      { label: 'nav-explore-tokens', path: '/explore/tokens' },
      { label: 'nav-explore-pools', path: '/explore/pools' },
      { label: 'nav-explore-transactions', path: '/explore/transactions' },
    ],
  },
  {
    label: 'nav-pool',
    path: '/positions',
    menu: [
      { label: 'nav-pool-view', path: '/positions' },
      { label: 'nav-pool-create', path: '/positions/create' },
    ],
  },
]
