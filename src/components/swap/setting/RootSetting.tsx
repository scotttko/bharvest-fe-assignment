import { Icon } from '@/components/shared'
import Toggle from '@/components/shared/toggle'
import { useSwapSettingContext } from '@/contexts/SwapSettingContextProvider'
import { colors } from '@/styles/colorPalette'
import { fonts } from '@/styles/fonts'
import styled from '@emotion/styled'

interface RootSettingProps {
  onTradeOptionClick: () => void
}

function RootSetting({ onTradeOptionClick }: RootSettingProps) {
  const {
    maxSlippage,
    deadline,
    tradeOptions,
    onChangeSlippage,
    onChangeSlippageAuto,
    onChangeDeadline,
  } = useSwapSettingContext()

  const isCustomTradeOption =
    !tradeOptions.default &&
    Object.entries(tradeOptions)
      .filter(([k, _]) => k !== 'default')
      .some(([_, v]) => !v)

  return (
    <SettingList>
      <SettingItem>
        <SettingLabel>
          <p>Max slippage</p>
        </SettingLabel>
        <SettingInput>
          <AutoBadge $auto={maxSlippage.auto} onClick={onChangeSlippageAuto}>
            Auto
          </AutoBadge>
          <input
            placeholder="0.50"
            value={maxSlippage.value}
            onChange={onChangeSlippage}
            {...(!maxSlippage.value && { onBlur: onChangeSlippageAuto })}
          />
          <span>%</span>
        </SettingInput>
      </SettingItem>
      <SettingItem>
        <SettingLabel>
          <p>Swap deadline</p>
        </SettingLabel>
        <SettingInput>
          <input value={deadline} onChange={onChangeDeadline} />
          <span css={{ marginRight: 4 }}>minutes</span>
        </SettingInput>
      </SettingItem>
      <SettingItem>
        <SettingLabel>
          <p>Trade options</p>
        </SettingLabel>

        <TradeOptionButton onClick={onTradeOptionClick}>
          <p>{isCustomTradeOption ? 'Custom' : 'Default'}</p>
          <Icon
            name="IcChevronDown"
            size={24}
            color={colors.neutral3}
            style={{ transform: 'rotate(180deg)' }}
          />
        </TradeOptionButton>
      </SettingItem>
    </SettingList>
  )
}

export default RootSetting

const SettingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;
  width: 100%;
`

const SettingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
`

const SettingLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    font-size: ${fonts.size.small};
    line-height: ${fonts.lineHeight.small};
    font-weight: ${fonts.weight.book};
    color: ${colors.neutral1};
  }
`

const SettingInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  height: 30px;
  border-radius: 16px;
  padding: 4px 8px 4px 4px;
  background-color: ${colors.surface1};
  border: 1px solid ${colors.surface3};

  input {
    width: 44px;
    height: 21px;
    font-size: ${fonts.size.small};
    line-height: ${fonts.lineHeight.small};
    font-weight: ${fonts.weight.book};
    color: ${colors.color};
    text-align: right;

    &::placeholder {
      color: ${colors.neutral1};
    }
  }

  span {
    font-size: ${fonts.size.small};
    line-height: ${fonts.lineHeight.small};
    font-weight: ${fonts.weight.book};
    color: ${colors.neutral1};
  }

  &:hover {
    background-color: ${colors.surface1Hovered};
    border: 1px solid ${colors.surface3Hovered};
  }
`

const AutoBadge = styled.button<{ $auto: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 21px;
  border-radius: 20px;
  background-color: ${({ $auto }) => ($auto ? colors.accent2 : colors.surface3)};
  color: ${({ $auto }) => ($auto ? colors.accent1 : colors.neutral2)};
  font-size: ${fonts.size.small};
  line-height: ${fonts.lineHeight.small};
  font-weight: ${fonts.weight.medium};
  margin-right: 4px;
`

const TradeOptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    font-size: ${fonts.size.small};
    font-weight: ${fonts.weight.book};
    color: ${colors.neutral2};

    &:hover {
      color: ${colors.neutral2Hovered};
    }
  }
`
