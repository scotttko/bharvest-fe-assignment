import { Icon, TokenImage } from '@/components/shared'
import { TOKENS } from '@/constants/tokens'
import { useSwapContext } from '@/contexts/SwapContext'
import useInput from '@/hooks/useInput'
import { SwapAction, Token } from '@/models/tokens'
import { colors } from '@/styles/colorPalette'
import { fonts } from '@/styles/fonts'
import styled from '@emotion/styled'
import { useEffect, useMemo, useRef } from 'react'

interface TokenSelectContentsProps {
  action: SwapAction
  onClose: () => void
}
function TokenSelectContents({ action, onClose }: TokenSelectContentsProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { onTokenSelect } = useSwapContext()
  const { value, onChange } = useInput()

  const tokenList = useMemo(
    () =>
      Object.values(TOKENS).filter(
        (token) =>
          token.name.toLowerCase().includes(value) || token.symbol.toLowerCase().includes(value),
      ),
    [value],
  )

  const handleTokenSelect = (token: Token, action: SwapAction) => {
    onTokenSelect(token, action)
    onClose()
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <ContentContainer>
      <SearchBarContainer>
        <Icon name="IcSearch" />
        <SearchInput placeholder="Search tokens" ref={inputRef} value={value} onChange={onChange} />
      </SearchBarContainer>

      <TokenListWrapper>
        <TokenListTitle>
          <Icon name="IcStar" color={colors.neutral2} size={16} />
          <p>Tokens by 24H volume</p>
        </TokenListTitle>

        <TokenList>
          {tokenList.map((token) => (
            <TokenItemButton key={token.symbol} onClick={() => handleTokenSelect(token, action)}>
              <TokenImage size={40} token={token.symbol} />
              <TokenItemName>
                <p>{token.name}</p>
                <span>{token.symbol}</span>
              </TokenItemName>
            </TokenItemButton>
          ))}
        </TokenList>
      </TokenListWrapper>
    </ContentContainer>
  )
}

export default TokenSelectContents

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding-bottom: 12px;
`

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  width: 100%;
  border-radius: 48px;
  padding: 0 16px;
  background-color: ${colors.surface2};
  border: 1px solid ${colors.surface3};
`

const SearchInput = styled.input`
  height: 22px;
  padding: 0 8px;
  color: ${colors.color};
  font-size: ${fonts.size.small};
  line-height: ${fonts.lineHeight.small};
  flex: 1;

  &::placeholder {
    color: ${colors.neutral2};
  }
`

const TokenListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const TokenListTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-size: ${fonts.size.small};
    line-height: ${fonts.lineHeight.small};
    font-weight: ${fonts.weight.medium};
    color: ${colors.neutral2};
  }
`

const TokenList = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 586px; */
  overflow: auto;
`

const TokenItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  background-color: ${colors.surface1};
  text-align: start;

  &:hover {
    background-color: ${colors.surface1Hovered};
  }
`

const TokenItemName = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: ${fonts.size.large};
    line-height: ${fonts.lineHeight.large};
    font-weight: ${fonts.weight.medium};
    color: ${colors.neutral1};
  }

  span {
    font-size: ${fonts.size.micro};
    line-height: 18px;
    font-weight: ${fonts.weight.book};
    color: ${colors.neutral2};
  }
`
