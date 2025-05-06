import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import { ChangeEvent } from 'react'

interface SwapInputProps {
  value: string
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  isTokenMode: boolean
}

function SwapInput({ value, onChange, disabled, isTokenMode }: SwapInputProps) {
  return disabled ? (
    <TokenDisabledLabel>0</TokenDisabledLabel>
  ) : (
    <InputWrapper>
      {!isTokenMode && <span>$</span>}
      <TokenInput placeholder="0" value={value} onChange={onChange} />
    </InputWrapper>
  )
}

export default SwapInput

const TokenDisabledLabel = styled.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
  color: ${colors.neutral3};
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  min-width: 0;

  span {
    font-size: 36px;
    line-height: 43px;
    font-weight: 500;
    color: ${colors.neutral1};
  }
`

const TokenInput = styled.input`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
  color: ${colors.color};

  &::placeholder {
    color: ${colors.neutral3};
  }
`
