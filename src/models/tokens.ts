export type TokenSymbol = 'ETH' | 'WBTC' | 'USDC'

export interface Token {
  name: string
  symbol: TokenSymbol
  decimal: number
  priceInUsd: number
}
