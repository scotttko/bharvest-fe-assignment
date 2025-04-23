import { TokenSymbol } from '@/models/tokens'

interface TokenImageProps {
  size?: number
  token: TokenSymbol
}

const tokenImageSrc: { [key in TokenSymbol]: string } = {
  ETH: 'https://token-icons.s3.amazonaws.com/eth.png',
  WBTC: 'https://coin-images.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857',
  USDC: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
}

function TokenImage({ size = 20, token }: TokenImageProps) {
  return <img src={tokenImageSrc[token]} alt={`${token}-image`} width={size} height={size} />
}

export default TokenImage
