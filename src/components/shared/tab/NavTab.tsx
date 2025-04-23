import { useLocation, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import TabItem from './TabItem'

interface TabItem {
  label: string
  path: string
}

interface NavTabProps {
  tabs: TabItem[]
}
function NavTab({ tabs }: NavTabProps) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <NavTabGroup>
      {tabs.map((tab) => (
        <TabItem
          key={tab.label}
          label={tab.label}
          isActive={location.pathname === tab.path}
          onClick={() => navigate(tab.path)}
        />
      ))}
    </NavTabGroup>
  )
}

export default NavTab

const NavTabGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px;
  padding-bottom: 6px;
`
