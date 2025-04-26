import styled from '@emotion/styled'
import { useState } from 'react'
import TradeOptionSetting from './TradeOptionSetting'
import RootSetting from './RootSetting'

function SettingDropdown() {
  const [settingRoute, setSettingRoute] = useState<'root' | 'trade-options'>('root')

  return (
    <SettingWrapper>
      {settingRoute === 'root' && (
        <RootSetting onTradeOptionClick={() => setSettingRoute('trade-options')} />
      )}
      {settingRoute === 'trade-options' && (
        <TradeOptionSetting onBack={() => setSettingRoute('root')} />
      )}
    </SettingWrapper>
  )
}

export default SettingDropdown

const SettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px 12px;
  width: 100%;
`
