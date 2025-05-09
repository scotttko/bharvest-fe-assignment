import styled from '@emotion/styled'
import { Icon, Dropdown } from '@/components/shared'
import { colors } from '@/styles/colorPalette'
import { useState } from 'react'
import PrefRootView from './root/PrefRootView'
import PrefLangView from './lang/PrefLangView'

function UserPreference() {
  const [prefRoute, setPrefRoute] = useState<'root' | 'lang'>('root')

  return (
    <UserPreferenceContainer>
      <Dropdown
        trigger={
          <UserMenuIcon>
            <Icon name="IcMenu" />
          </UserMenuIcon>
        }
        position="right"
        minWidth={325}
      >
        {prefRoute === 'root' && <PrefRootView onLangClick={() => setPrefRoute('lang')} />}
        {prefRoute === 'lang' && <PrefLangView onBack={() => setPrefRoute('root')} />}
      </Dropdown>
    </UserPreferenceContainer>
  )
}

export default UserPreference

const UserPreferenceContainer = styled.div``

const UserMenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    background-color: ${colors.surface1Hovered};
  }
`
