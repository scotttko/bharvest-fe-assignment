import { TOKENS } from '@/constants/tokens'
import { Token } from '@/models/tokens'
import { useState } from 'react'

interface SwapPair {
  sell: Token | null
  buy: Token | null
}

function useTokenSwap() {
  const [tokenSwapPair, setTokenSwapPair] = useState<SwapPair>({ sell: TOKENS.ETH, buy: null })

  const handleSwitch = () => {
    setTokenSwapPair((prev) => ({ sell: prev.buy, buy: prev.sell }))
  }

  return { tokenSwapPair, onSwitch: handleSwitch }
}

export default useTokenSwap
