import { useSwapContext } from '@/contexts/SwapContext'
import styled from '@emotion/styled'
import { Icon } from '../shared'
import { colors } from '@/styles/colorPalette'
import { AnimatePresence, motion, Variants } from 'motion/react'
import { useMemo, useState } from 'react'
import { fonts } from '@/styles/fonts'
import { SwapAction } from '@/models/tokens'
import { divide } from '@/utils/common'
import { oppositeActions } from '@/constants/tokens'
import { useSwapSettingContext } from '@/contexts/SwapSettingContext'
import { useTranslation } from 'react-i18next'

function SwapInfoAccordion() {
  const { t } = useTranslation()
  const { swapPair, buyTokenRatio } = useSwapContext()
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  const [ratioBasis, setRatioBasis] = useState<SwapAction>('buy')

  const { maxSlippage } = useSwapSettingContext()

  const ratio = useMemo(() => {
    if (!buyTokenRatio) {
      return null
    }

    const oppositeAction = oppositeActions[ratioBasis]
    const ratioValue = ratioBasis === 'buy' ? buyTokenRatio : divide('1', buyTokenRatio)

    return `1 ${swapPair[ratioBasis]?.symbol} = ${ratioValue} ${swapPair[oppositeAction]?.symbol}`
  }, [buyTokenRatio, ratioBasis, swapPair])

  if (!buyTokenRatio) {
    return null
  }

  return (
    <Container>
      <Header>
        <RatioLabel onClick={() => setRatioBasis((prev) => oppositeActions[prev])}>
          {ratio}
        </RatioLabel>
        <ArrowButton
          animate={isAccordionOpen ? 'open' : 'closed'}
          variants={{
            open: { rotate: -180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.1 }}
          style={{ originY: 0.55 }}
          onClick={() => setIsAccordionOpen((prev) => !prev)}
        >
          <Icon name="IcChevronDown" size={16} color={colors.neutral2} />
        </ArrowButton>
      </Header>

      <AnimatePresence initial={false}>
        {isAccordionOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={accordionVariants}
          >
            <ContentWrapper>
              <InfoRow>
                <span>{t('swap-settings.max-slippage')}</span>
                <InfoValue>
                  <AutoBadge $auto={maxSlippage.auto}>{t('swap-settings.slippage-auto')}</AutoBadge>
                  <p>{maxSlippage.value}%</p>
                </InfoValue>
              </InfoRow>
            </ContentWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default SwapInfoAccordion

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4px 8px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
`

const RatioLabel = styled.button`
  font-size: ${fonts.size.micro};
  line-height: 18px;
  font-weight: ${fonts.weight.medium};
  color: ${colors.neutral2};

  &:active {
    opacity: 0.7;
  }
`

const ArrowButton = styled(motion.button)`
  display: flex;
  align-items: center;
  margin-left: auto;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding-top: 8px;
`

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: ${fonts.size.micro};
    line-height: 18px;
    font-weight: ${fonts.weight.medium};
    color: ${colors.neutral2};
  }

  p {
    font-size: ${fonts.size.micro};
    line-height: 18px;
    font-weight: ${fonts.weight.medium};
    color: ${colors.neutral1};
  }
`

const InfoValue = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const AutoBadge = styled.div<{ $auto: boolean }>`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ $auto }) => ($auto ? colors.accent2 : colors.surface3)};
  color: ${({ $auto }) => ($auto ? colors.accent1 : colors.neutral2)};
  font-size: ${fonts.size.micro};
  font-weight: ${fonts.weight.medium};
  margin-right: 4px;
`

const accordionVariants: Variants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      height: {
        duration: 0.2,
      },
      opacity: {
        duration: 0.25,
      },
    },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: {
      height: {
        duration: 0.2,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
}
