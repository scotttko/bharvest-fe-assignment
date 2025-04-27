import styled from '@emotion/styled'
import TabItem from './TabItem'
import { colors } from '@/styles/colorPalette'
import { IconName } from '../icon'
import { useLayoutEffect, useRef, useState } from 'react'

interface StateTabItem<T> {
  label: string
  icon?: IconName
  value: T
}

interface TabProps<T> {
  tabs: StateTabItem<T>[]
  activeTab: T
  onChange: (tab: T) => void
}

function Tab<T>({ tabs, activeTab, onChange }: TabProps<T>) {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  useLayoutEffect(() => {
    const index = tabs.findIndex((tab) => tab.value === activeTab)
    const currentTab = tabRefs.current[index]

    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      })
    }
  }, [activeTab, tabs])

  return (
    <NavTabGroup>
      {tabs.map((tab, index) => (
        <TabItem
          key={tab.label}
          ref={(el) => {
            tabRefs.current[index] = el
          }}
          label={tab.label}
          icon={tab.icon}
          isActive={activeTab === tab.value}
          onClick={() => onChange(tab.value)}
        />
      ))}

      <ActiveIndication css={indicatorStyle} />
    </NavTabGroup>
  )
}

export default Tab

const NavTabGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px;
  padding-bottom: 6px;
  border-radius: 24px;
  border: 1px solid ${colors.surface3};
  position: relative;
`

const ActiveIndication = styled.div`
  position: absolute;
  width: 100%;
  max-width: 64px;
  bottom: 50%;
  transform: translateY(50%);
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
