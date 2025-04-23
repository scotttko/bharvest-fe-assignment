import { Token } from '@/models/tokens'
import { colors } from '@/styles/colorPalette'
import { fonts } from '@/styles/fonts'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Icon } from '../shared'
import TokenImage from '../shared/token-image'
import { css } from '@emotion/react'

interface SwapTokenBoxProps {
  title: string
  token: Token | null
}
function SwapTokenBox({ title, token }: SwapTokenBoxProps) {
  return (
    <BoxContainer $isSelected={!!token}>
      <BoxLabel>{title}</BoxLabel>

      <TokenAmountSection>
        <TokenInput placeholder="0" disabled={!token} />
        <TokenSelectButton $isSelected={!!token} whileTap={{ scale: 0.95 }}>
          {token && <TokenImage token={token.symbol} size={28} />}
          <p>{token ? token.symbol : 'Select token'}</p>
          <Icon name="IcChevronDown" size={24} />
        </TokenSelectButton>
      </TokenAmountSection>

      <ConvertedAmount>$100</ConvertedAmount>

      {/* {!token && <Dim />} */}
    </BoxContainer>
  )
}

export default SwapTokenBox

const BoxContainer = styled.div<{ $isSelected: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 20px;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? colors.surface3 : 'transparent')};
  background-color: ${({ $isSelected }) => ($isSelected ? colors.surface1 : colors.surface2)};

  ${({ $isSelected }) =>
    !$isSelected &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${colors.surface2Hovered};
      }

      &:active {
        opacity: 0.7;
      }
    `}
`

const BoxLabel = styled.p`
  font-size: ${fonts.size.small};
  line-height: ${fonts.lineHeight.small};
  font-weight: ${fonts.weight.book};
  color: ${colors.neutral2};
`

const TokenAmountSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const TokenInput = styled.input`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
  color: ${colors.color};
  width: fit-content;
  flex: 1;

  &::placeholder {
    color: ${colors.neutral3};
  }
`

const TokenSelectButton = styled(motion.button)<{ $isSelected: boolean }>`
  height: 36px;
  padding: ${({ $isSelected }) => ($isSelected ? '0 12px 0 6px' : '0 12px')};
  border-radius: 36px;
  box-shadow: rgba(34, 34, 34, 0.04) 0px 0px 10px;
  border: 1px solid ${colors.surface3Solid};
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${({ $isSelected }) => ($isSelected ? colors.surface1 : colors.accent1)};

  p {
    font-size: ${fonts.size.small};
    line-height: 18px;
    font-weight: 600;
    color: ${({ $isSelected }) => ($isSelected ? colors.color : colors.white)};
  }

  svg {
    color: ${({ $isSelected }) => ($isSelected ? colors.color : colors.white)};
  }
`

const ConvertedAmount = styled.p`
  font-size: ${fonts.size.micro};
  line-height: 18px;
  font-weight: ${fonts.weight.medium};
  color: ${colors.neutral2};
`

const Dim = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.surface2};
  border-radius: 20px;
`
