import { useLocation, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import TabItem from './TabItem'
import { colors } from '@/styles/colorPalette'
import { useEffect, useRef, useState } from 'react'
import { TabTrans } from '@/models/header'

interface NavTabItem {
  label: TabTrans
  path: string
}

interface NavTabProps {
  tabs: NavTabItem[]
}
function NavTab({ tabs }: NavTabProps) {
  const location = useLocation()
  const navigate = useNavigate()

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const index = tabs.findIndex((tab) => tab.path === location.pathname)
    const activeTab = tabRefs.current[index]

    if (activeTab) {
      setIndicatorStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      })
    }
  }, [location.pathname, tabs])

  return (
    <NavTabGroup>
      {tabs.map((tab, index) => (
        <TabItem
          key={tab.label}
          ref={(el) => {
            tabRefs.current[index] = el
          }}
          label={tab.label}
          isActive={location.pathname === tab.path}
          onClick={() => navigate(tab.path)}
        />
      ))}

      <ActiveIndication css={indicatorStyle} />
    </NavTabGroup>
  )
}

export default NavTab

const NavTabGroup = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 12px;
  padding: 4px;
  padding-bottom: 6px;
  position: relative;
`

const ActiveIndication = styled.div`
  position: absolute;
  top: 4;
  left: 0;
  height: 32px;
  background: ${colors.surface3};
  z-index: 0;
  border-radius: 32px;
  transition: left 0.3s ease-in-out;

  &:hover {
    background: ${colors.surface3Hovered};
  }
`
