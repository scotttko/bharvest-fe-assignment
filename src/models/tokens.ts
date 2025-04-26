export type TokenSymbol = 'ETH' | 'WBTC' | 'USDC'

export type SwapAction = 'buy' | 'sell'
export type SwapMode = 'token' | 'usd'

export type SwapPair = Record<SwapAction, Token | null>
export type SwapValues = Record<SwapAction, string>
export type SwapModes = Record<SwapAction, boolean>
export type SwapConvertedValues = Record<SwapAction, string | null>

export interface Token {
  name: string
  symbol: TokenSymbol
  decimal: number
}
