import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import Icon from '../../../icon'
import { colors } from '@/styles/colorPalette'
import { fonts } from '@/styles/fonts'
import { LANGUAGES } from '@/constants/pref'

interface PrefLangViewProps {
  onBack: () => void
}

function PrefLangView({ onBack }: PrefLangViewProps) {
  const { t, i18n } = useTranslation()

  const handleLangChange = useCallback(
    (lang: 'en' | 'ko') => {
      i18n.changeLanguage(lang)
    },
    [i18n],
  )

  return (
    <PreferenceWrapper>
      <LangHeader>
        <button onClick={onBack}>
          <Icon name="IcChevronDown" size={24} style={{ transform: 'rotate(0deg)' }} />
        </button>
        <p>{t('swap-settings.trade-options')}</p>
      </LangHeader>
      <LangList>
        {LANGUAGES.map((item) => (
          <LangButton key={item.lang} onClick={() => handleLangChange(item.lang)}>
            <p>{t(`header.${item.label}`)}</p>
            {item.lang === i18n.language && <Icon name="IcCheck" color={colors.accent1} />}
          </LangButton>
        ))}
      </LangList>
    </PreferenceWrapper>
  )
}

export default PrefLangView

const PreferenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 16px;
  width: 100%;
`

const LangHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  gap: 8px;
  padding: 8px 0;

  p {
    font-size: ${fonts.size.large};
    line-height: ${fonts.lineHeight.large};
    font-weight: ${fonts.weight.medium};
    color: ${colors.neutral1};
  }

  button {
  }
`

const LangList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const LangButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 0;

  p {
    font-size: ${fonts.size.micro};
    font-weight: ${fonts.weight.medium};
    color: ${colors.neutral1};
  }

  &:hover {
    opacity: 0.7;
  }
`
