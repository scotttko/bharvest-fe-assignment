import styled from '@emotion/styled'
import Icon, { IconName } from '../../icon'
import { fonts } from '@/styles/fonts'
import { colors } from '@/styles/colorPalette'
import Dropdown from '../../dropdown/Dropdown'
import Tab from '../../tab/Tab'
import { useCallback } from 'react'
import { UserTheme, useTheme } from '@/contexts/ThemeContext'

interface ThemeTab {
  label: string
  value: UserTheme
  icon?: IconName
}

const THEME_TABS: ThemeTab[] = [
  { label: 'Auto', value: 'auto' },
  {
    label: 'Light',
    value: 'light',
    icon: 'IcLight',
  },
  {
    label: 'Dark',
    value: 'dark',
    icon: 'IcDark',
  },
]

function UserPreference() {
  const { theme, onSwitchTheme } = useTheme()

  const handleThemeSwitch = useCallback(
    (tab: UserTheme) => {
      onSwitchTheme(tab)
    },
    [onSwitchTheme],
  )

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
        <PreferenceWrapper>
          <PreferenceTitle>Global preferences</PreferenceTitle>

          <PreferenceList>
            <PreferenceItem>
              <PreferenceItemLabel>Theme</PreferenceItemLabel>

              <Tab tabs={THEME_TABS} activeTab={theme} onChange={handleThemeSwitch} />
            </PreferenceItem>

            <PreferenceItem>
              <PreferenceItemLabel>Language</PreferenceItemLabel>
              <PreferenceButton>
                <p>{'English'}</p>
                <Icon
                  name="IcChevronDown"
                  size={24}
                  color={colors.neutral3}
                  style={{ transform: 'rotate(180deg)' }}
                />
              </PreferenceButton>
            </PreferenceItem>

            <PreferenceItem>
              <PreferenceItemLabel>Currency</PreferenceItemLabel>
              <PreferenceButton>
                <p css={{ marginRight: 28 }}>{'USD'}</p>
              </PreferenceButton>
            </PreferenceItem>
          </PreferenceList>
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
  font-weight: ${fonts.weight.medium};
  color: ${colors.neutral1};
  padding: 8px 0;
`

const PreferenceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`

const PreferenceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const PreferenceItemLabel = styled.span`
  font-size: ${fonts.size.small};
  line-height: ${fonts.lineHeight.small};
  font-weight: ${fonts.weight.medium};
  color: ${colors.neutral2};
`

const PreferenceButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    font-size: ${fonts.size.small};
    font-weight: ${fonts.weight.book};
    color: ${colors.neutral1};

    &:hover {
      opacity: 0.6;
    }
  }
`
