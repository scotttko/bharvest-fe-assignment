import {
  SwapAction,
  SwapConvertedValues,
  SwapModes,
  SwapPair,
  SwapValues,
  Token,
} from '@/models/tokens'
import { divide, getDecimalNumber, multiply } from '@/utils/common'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import useGetTokenPrice from './useGetTokenPrice'
import useDebounce from './useDebounce'
import { oppositeActions, TOKENS } from '@/constants/tokens'

function useTokenSwap() {
  const [swapPair, setSwapPair] = useState<SwapPair>({ sell: TOKENS.ETH, buy: null })
  const tokenPrice = useGetTokenPrice()

  const [swapValues, setSwapValues] = useState<SwapValues>({ sell: '', buy: '' })
  const [tokenMode, setTokenMode] = useState<SwapModes>({ sell: true, buy: true })

  const buyTokenRatio = useMemo(() => {
    if (!swapPair.buy || !swapPair.sell) {
      return null
    }

    const { buy, sell } = swapPair

    return divide(tokenPrice[sell.symbol], tokenPrice[buy.symbol])
  }, [swapPair, tokenPrice])

  const debouncedSellValue = useDebounce(swapValues.sell)
  const debouncedBuyValue = useDebounce(swapValues.buy)

  const getConvertedValue = (value: string, isTokenMode: boolean, usdPrice: string) => {
    return isTokenMode ? multiply(value, usdPrice) : divide(value, usdPrice)
  }

  const convertedValues: SwapConvertedValues = useMemo(() => {
    const { sell: sellToken, buy: buyTokrn } = swapPair
    const { sell: sellMode, buy: buyMode } = tokenMode

    const sellConverted = !sellToken
      ? null
      : getConvertedValue(debouncedSellValue, sellMode, tokenPrice[sellToken.symbol])

    const buyConverted = !buyTokrn
      ? null
      : getConvertedValue(debouncedBuyValue, buyMode, tokenPrice[buyTokrn.symbol])

    return { sell: sellConverted, buy: buyConverted }
  }, [swapPair, tokenMode, debouncedSellValue, tokenPrice, debouncedBuyValue])

  const handleInputChange = useCallback(
    (action: SwapAction) => (ev: ChangeEvent<HTMLInputElement>) => {
      const { value } = ev.target
      const numValue = getDecimalNumber(value)

      const token = swapPair[action]
      const oppositeAction = oppositeActions[action]
      const oppositeToken = swapPair[oppositeAction]

      if (token) {
        setSwapValues((prev) => {
          if (!oppositeToken) {
            return { ...prev, [action]: numValue }
          }

          const oppositeTokenPrice = tokenPrice[oppositeToken.symbol]
          const currentTokenPrice = tokenPrice[token.symbol]

          const currentValue = tokenMode[action]
            ? getConvertedValue(numValue, true, currentTokenPrice)
            : numValue

          const oppositeValue = tokenMode[oppositeAction]
            ? divide(currentValue, oppositeTokenPrice)
            : currentValue

          return {
            ...prev,
            [action]: numValue,
            [oppositeAction]: oppositeValue,
          }
        })
      }
    },
    [tokenMode, swapPair, tokenPrice],
  )

  const handleModeChange = useCallback(
    (action: SwapAction) => {
      const oppositeAction = oppositeActions[action]

      setTokenMode((prev) => ({
        ...prev,
        [action]: !prev[action],
        [oppositeAction]: prev[action] && !prev[oppositeAction] ? true : prev[oppositeAction],
      }))

      setSwapValues((prev) => ({
        ...prev,
        [action]: convertedValues[action],
        [oppositeAction]:
          tokenMode[action] && !tokenMode[oppositeAction]
            ? convertedValues[oppositeAction]
            : prev[oppositeAction],
      }))
    },
    [convertedValues, tokenMode],
  )

  const handleTokenSwitch = useCallback(() => {
    setSwapPair((prev) => ({ sell: prev.buy, buy: prev.sell }))
    setTokenMode((prev) => ({ sell: prev.buy, buy: prev.sell }))
    setSwapValues((prev) => ({ sell: prev.buy, buy: prev.sell }))
  }, [])

  const handleTokenSelect = useCallback(
    (token: Token, action: SwapAction) => {
      const oppositeAction = oppositeActions[action]

      if (swapPair[oppositeAction]?.symbol === token.symbol) {
        setSwapPair((prev) => ({ ...prev, [oppositeAction]: prev[action], [action]: token }))
        setSwapValues({ sell: '', buy: '' })
        return
      }

      setSwapPair((prev) => ({ ...prev, [action]: token }))

      const oppositeToken = swapPair[oppositeAction]

      setSwapValues((prev) => {
        if (prev[oppositeAction] && oppositeToken) {
          const oppositeTokenPrice = tokenPrice[oppositeToken.symbol]

          const oppositeValue = tokenMode[oppositeAction]
            ? multiply(prev[oppositeAction], oppositeTokenPrice)
            : prev[oppositeAction]

          const convertedValue = tokenMode[action]
            ? divide(oppositeValue, tokenPrice[token.symbol])
            : oppositeValue

          return { ...prev, [action]: convertedValue }
        } else {
          return { ...prev }
        }
      })
    },
    [swapPair, tokenMode, tokenPrice],
  )

  return {
    swapValues,
    tokenMode,
    swapPair: swapPair,
    convertedValues,
    buyTokenRatio,
    onInputChange: handleInputChange,
    onModeChange: handleModeChange,
    onSwitch: handleTokenSwitch,
    onTokenSelect: handleTokenSelect,
  }
}

export default useTokenSwap
