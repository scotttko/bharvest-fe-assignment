import { Icon } from '@/components/shared'
import SwapSettingButton from '@/components/swap/setting/SwapSettingButton'
import SwapInfoAccordion from '@/components/swap/SwapInfoAccordion'
import SwapTokenBox from '@/components/swap/SwapTokenBox'
import SwapContextProvider, { useSwapContext } from '@/contexts/SwapContextProvider'
import SwapSettingContextProvider from '@/contexts/SwapSettingContextProvider'
import { colors } from '@/styles/colorPalette'
import { fonts } from '@/styles/fonts'
import styled from '@emotion/styled'
import { motion } from 'motion/react'

function SwapPageView() {
  const { onSwitch, swapPair } = useSwapContext()

  return (
    <SwapContainer>
      <SwapSettingButton />
      <SellBoxWrapper>
        <SwapTokenBox action="sell" key={swapPair.sell?.symbol} />

        <SwtichTokenButton whileTap={{ scale: 0.95 }} onClick={onSwitch}>
          <Icon name="IcArrowDown" />
        </SwtichTokenButton>
      </SellBoxWrapper>

      <SwapTokenBox action="buy" key={swapPair.buy?.symbol} />
      <ConnectButton>Connect Wallet</ConnectButton>

      <SwapInfoAccordion />
    </SwapContainer>
  )
}

function SwapPage() {
  return (
    <SwapContextProvider>
      <SwapSettingContextProvider>
        <SwapPageView />
      </SwapSettingContextProvider>
    </SwapContextProvider>
  )
}

export default SwapPage

const SwapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`

const SellBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SwtichTokenButton = styled(motion.button)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid ${colors.background};
  border-radius: 16px;
  background-color: ${colors.surface2};
  position: absolute;
  bottom: -26px;
  z-index: 5;

  &:hover {
    background-color: ${colors.surface2Hovered};
  }

  &:active {
    opacity: 0.7;
  }
`

const ConnectButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  border-radius: 20px;
  background-color: ${colors.accent2};
  color: ${colors.accent1};
  font-size: ${fonts.size.large};
  line-height: ${fonts.lineHeight.small};
  font-weight: ${fonts.weight.large};
`
