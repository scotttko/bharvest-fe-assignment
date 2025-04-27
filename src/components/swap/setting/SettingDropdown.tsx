import styled from '@emotion/styled'
import { useState } from 'react'
import RootSettingView from './RootSettingView'
import TradeOptionSettingView from './TradeOptionSettingView'

function SettingDropdown() {
  const [settingRoute, setSettingRoute] = useState<'root' | 'trade-options'>('root')

  return (
    <SettingWrapper>
      {settingRoute === 'root' && (
        <RootSettingView onTradeOptionClick={() => setSettingRoute('trade-options')} />
      )}
      {settingRoute === 'trade-options' && (
        <TradeOptionSettingView onBack={() => setSettingRoute('root')} />
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
