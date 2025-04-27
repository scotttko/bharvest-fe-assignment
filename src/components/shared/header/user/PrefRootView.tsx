import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { UserTheme, useTheme } from '@/contexts/ThemeContext'
import { useCallback } from 'react'
import { colors } from '@/styles/colorPalette'
import { fonts } from '@/styles/fonts'
import { THEME_TABS } from '@/constants/pref'
import { Tab, Icon } from '@/components/shared'

interface PrefRootViewProps {
  onLangClick: () => void
}

function PrefRootView({ onLangClick }: PrefRootViewProps) {
  const { t, i18n } = useTranslation()
  const { theme, onSwitchTheme } = useTheme()

  const handleThemeSwitch = useCallback(
    (tab: UserTheme) => {
      onSwitchTheme(tab)
    },
    [onSwitchTheme],
  )

  return (
    <PreferenceWrapper>
      <PreferenceTitle>{t('header.pref-title')}</PreferenceTitle>

      <PreferenceList>
        <PreferenceItem>
          <PreferenceItemLabel>{t('header.pref-theme')}</PreferenceItemLabel>

          <Tab tabs={THEME_TABS} activeTab={theme} onChange={handleThemeSwitch} />
        </PreferenceItem>

        <PreferenceItem>
          <PreferenceItemLabel>{t('header.pref-lang')}</PreferenceItemLabel>
          <PreferenceButton onClick={onLangClick}>
            <p>{i18n.language === 'ko' ? t('header.lang-ko') : t('header.lang-en')}</p>
            <Icon
              name="IcChevronDown"
              size={24}
              color={colors.neutral3}
              style={{ transform: 'rotate(180deg)' }}
            />
          </PreferenceButton>
        </PreferenceItem>

        <PreferenceItem>
          <PreferenceItemLabel>{t('header.pref-currency')}</PreferenceItemLabel>
          <PreferenceButton>
            <p css={{ marginRight: 28 }}>{'USD'}</p>
          </PreferenceButton>
        </PreferenceItem>
      </PreferenceList>
    </PreferenceWrapper>
  )
}

export default PrefRootView

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
  min-height: 40px;
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
