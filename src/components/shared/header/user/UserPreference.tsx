import styled from '@emotion/styled'
import Icon from '../../icon'
import { fonts } from '@/styles/fonts'
import { colors } from '@/styles/colorPalette'
import Dropdown from '../../dropdown/Dropdown'

function UserPreference() {
  return (
    <UserPreferenceContainer>
      <Dropdown
        trigger={
          <UserMenuIcon>
            <Icon name="IcMenu" />
          </UserMenuIcon>
        }
        position="right"
      >
        <PreferenceWrapper>
          <PreferenceTitle>Global preferences</PreferenceTitle>
        </PreferenceWrapper>
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

const PreferenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 4px 12px 16px;
  width: 100%;
`

const PreferenceTitle = styled.p`
  font-size: ${fonts.size.large};
  line-height: ${fonts.lineHeight.large};
  font-weight: ${fonts.weight.book};
  color: ${colors.neutral1};
  padding: 8px 0;
`
