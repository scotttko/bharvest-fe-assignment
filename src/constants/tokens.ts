import { Token, TokenSymbol } from '@/models/tokens'

export const TOKENS: { [key in TokenSymbol]: Token } = {
  ETH: { name: 'Ethereum', symbol: 'ETH', decimal: 18, priceInUsd: 1000 },
  WBTC: { name: 'Wrapped BTC', symbol: 'WBTC', decimal: 8, priceInUsd: 10000 },
  USDC: { name: 'USDC', symbol: 'USDC', decimal: 6, priceInUsd: 1 },
}
