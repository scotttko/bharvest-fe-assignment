import { TOKENS } from '@/constants/tokens'
import useTokenSwap from '@/hooks/useTokenSwap'
import {
  SwapAction,
  SwapConvertedValues,
  SwapModes,
  SwapPair,
  SwapValues,
  Token,
} from '@/models/tokens'
import { ChangeEvent, createContext, PropsWithChildren, useContext, useMemo } from 'react'

interface SwapContextValue {
  swapValues: SwapValues
  swapPair: SwapPair
  tokenMode: SwapModes
  convertedValues: SwapConvertedValues
  buyTokenRatio: string | null
  onSwitch: () => void
  onTokenSelect: (token: Token, action: SwapAction) => void
  onInputChange: (action: SwapAction) => (ev: ChangeEvent<HTMLInputElement>) => void
  onModeChange: (action: SwapAction) => void
}

const defaultValues: SwapContextValue = {
  swapValues: { sell: '', buy: '' },
  swapPair: { sell: TOKENS.ETH, buy: null },
  tokenMode: { sell: true, buy: true },
  convertedValues: { sell: null, buy: null },
  buyTokenRatio: null,
  onSwitch: () => {},
  onTokenSelect: () => {},
  onInputChange: () => () => {},
  onModeChange: () => {},
}

export const oppositeActions: { [key in SwapAction]: SwapAction } = {
  sell: 'buy',
  buy: 'sell',
}

const Context = createContext<SwapContextValue>(defaultValues)

function SwapContextProvider({ children }: PropsWithChildren) {
  const {
    swapValues,
    tokenMode,
    swapPair,
    convertedValues,
    buyTokenRatio,
    onInputChange,
    onModeChange,
    onSwitch,
    onTokenSelect,
  } = useTokenSwap()

  const values = useMemo(
    () => ({
      swapValues,
      tokenMode,
      swapPair,
      buyTokenRatio,
      convertedValues,
      onInputChange,
      onModeChange,
      onSwitch,
      onTokenSelect,
    }),
    [
      swapValues,
      tokenMode,
      swapPair,
      buyTokenRatio,
      convertedValues,
      onInputChange,
      onModeChange,
      onSwitch,
      onTokenSelect,
    ],
  )

  return <Context.Provider value={values}>{children}</Context.Provider>
}

export default SwapContextProvider

export function useSwapContext() {
  const values = useContext(Context)

  if (values == null) {
    throw new Error('SwapContext 내부에서 사용해주세요')
  }

  return values
}
