import { SwapAction, Token, TokenSymbol } from '@/models/tokens'

export const TOKENS: { [key in TokenSymbol]: Token } = {
  ETH: { name: 'Ethereum', symbol: 'ETH', decimal: 18 },
  USDC: { name: 'USDC', symbol: 'USDC', decimal: 6 },
  WBTC: { name: 'Wrapped BTC', symbol: 'WBTC', decimal: 8 },
}

export const TOKEN_PRICES: { [key in TokenSymbol]: string } = {
  ETH: '1000',
  USDC: '1',
  WBTC: '10000',
}

export const oppositeActions: { [key in SwapAction]: SwapAction } = {
  sell: 'buy',
  buy: 'sell',
}
