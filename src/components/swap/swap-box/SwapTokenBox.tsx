import { colors } from '@/styles/colorPalette'
import { fonts } from '@/styles/fonts'
import styled from '@emotion/styled'
import { motion } from 'motion/react'
import { Icon, TokenImage } from '../../shared'
import { css } from '@emotion/react'
import { useMemo, useState } from 'react'
import TokenSelectModal from '../modal/TokenSelectModal'
import { useSwapContext } from '@/contexts/SwapContext'
import { abbreviateNumber } from '@/utils/common'
import { SwapAction } from '@/models/tokens'
import { useTranslation } from 'react-i18next'
import SwapInput from './SwapInput'

interface SwapTokenBoxProps {
  action: SwapAction
}

function SwapTokenBox({ action }: SwapTokenBoxProps) {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { swapPair, swapValues, tokenMode, convertedValues, onInputChange, onModeChange } =
    useSwapContext()

  const selectedToken = useMemo(() => swapPair[action], [action, swapPair])
  const isTokenSelected = !!selectedToken

  const tokenValue = useMemo(() => swapValues[action], [action, swapValues])
  const isTokenMode = useMemo(() => tokenMode[action], [action, tokenMode])
  const convertedValue = useMemo(() => convertedValues[action], [action, convertedValues])

  return (
    <>
      <TokenBox
        $isSelected={isTokenSelected}
        {...(!isTokenSelected && { onClick: () => setIsModalOpen(true) })}
      >
        <BoxLabel>{action === 'buy' ? t('swap.buy') : t('swap.sell')}</BoxLabel>

        <TokenAmountSection>
          <SwapInput
            value={tokenValue}
            onChange={onInputChange(action)}
            isTokenMode={isTokenMode}
            disabled={!isTokenSelected}
          />

          <TokenSelectButton
            $isSelected={isTokenSelected}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
          >
            {isTokenSelected && <TokenImage token={selectedToken.symbol} size={28} />}
            <p>{isTokenSelected ? selectedToken.symbol : 'Select token'}</p>
            <Icon name="IcChevronDown" size={24} />
          </TokenSelectButton>
        </TokenAmountSection>

        {isTokenSelected && convertedValue && (
          <ConvertedAmount onClick={() => onModeChange(action)}>
            {isTokenMode
              ? `$${abbreviateNumber(convertedValue)}`
              : `${abbreviateNumber(convertedValue)} ${selectedToken.symbol}`}
          </ConvertedAmount>
        )}
      </TokenBox>

      <TokenSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        action={action}
      />
    </>
  )
}

export default SwapTokenBox

const TokenBox = styled.div<{ $isSelected: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 20px;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? colors.surface3 : 'transparent')};
  background-color: ${({ $isSelected }) => ($isSelected ? colors.surface1 : colors.surface2)};
  min-height: 130px;

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

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      &:hover {
        background-color: ${colors.surface1Hovered};
      }
    `}
`

const ConvertedAmount = styled.button`
  font-size: ${fonts.size.micro};
  line-height: 18px;
  font-weight: ${fonts.weight.medium};
  color: ${colors.neutral2};
  text-align: start;
  display: flex;
  align-items: center;
  align-self: flex-start;

  &:active {
    opacity: 0.6;
  }
`
