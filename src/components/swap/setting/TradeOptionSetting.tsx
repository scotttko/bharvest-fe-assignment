import { Icon } from '@/components/shared'
import Toggle from '@/components/shared/toggle'
import { useSwapSettingContext } from '@/contexts/SwapSettingContextProvider'
import { colors } from '@/styles/colorPalette'
import { fonts } from '@/styles/fonts'
import styled from '@emotion/styled'

interface TradeOptionSettingProps {
  onBack: () => void
}

function TradeOptionSetting({ onBack }: TradeOptionSettingProps) {
  const { tradeOptions, onChangeTradeOptions } = useSwapSettingContext()

  const isCustomDisabled = Object.entries(tradeOptions)
    .filter(([k, _]) => k !== 'default' && k !== 'uniswapX')
    .reduce((prev, [_, v]) => prev + (!v ? 1 : 0), 0)

  return (
    <TradeOptionContainer>
      <TradeOptionHeader>
        <button onClick={onBack}>
          <Icon name="IcChevronDown" style={{ transform: 'rotate(0deg)' }} />
        </button>
        <p>Trade Options</p>
      </TradeOptionHeader>

      <DefaultOptionWrapper>
        <DefaultContent>
          <p>Default</p>
          <span>Selecting this option identifies the most efficient route for your swap.</span>

          {tradeOptions.default && (
            <div css={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span>Includes</span>
              <span className="uniswap">Uniswap X</span>
            </div>
          )}
        </DefaultContent>

        <Toggle isChecked={tradeOptions.default} onSwitch={() => onChangeTradeOptions('default')} />
      </DefaultOptionWrapper>

      {!tradeOptions.default && (
        <CustomOptionWrapper>
          <CustomOptionRow>
            <CustomOptionLabel>
              <p className="uniswap">UniswapX</p>
            </CustomOptionLabel>

            <Toggle
              isChecked={tradeOptions.uniswapX}
              onSwitch={() => onChangeTradeOptions('uniswapX')}
            />
          </CustomOptionRow>
          <CustomOptionRow>
            <CustomOptionLabel>
              <p>v4 pools</p>
            </CustomOptionLabel>

            <Toggle
              isChecked={tradeOptions.v4Pools}
              onSwitch={() => onChangeTradeOptions('v4Pools')}
              disabled={isCustomDisabled >= 2 && tradeOptions.v4Pools}
            />
          </CustomOptionRow>
          <CustomOptionRow>
            <CustomOptionLabel>
              <p>v3 pools</p>
            </CustomOptionLabel>

            <Toggle
              isChecked={tradeOptions.v3Pools}
              onSwitch={() => onChangeTradeOptions('v3Pools')}
              disabled={isCustomDisabled >= 2 && tradeOptions.v3Pools}
            />
          </CustomOptionRow>
          <CustomOptionRow>
            <CustomOptionLabel>
              <p>v2 pools</p>
            </CustomOptionLabel>

            <Toggle
              isChecked={tradeOptions.v2Pools}
              onSwitch={() => onChangeTradeOptions('v2Pools')}
              disabled={isCustomDisabled >= 2 && tradeOptions.v2Pools}
            />
          </CustomOptionRow>
        </CustomOptionWrapper>
      )}
    </TradeOptionContainer>
  )
}

export default TradeOptionSetting

const TradeOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  width: 100%;
  gap: 16px;
`

const TradeOptionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  p {
    font-size: ${fonts.size.large};
    line-height: ${fonts.lineHeight.large};
    font-weight: ${fonts.weight.medium};
    color: ${colors.neutral1};
  }

  button {
    position: absolute;
    left: 0;
  }
`

const DefaultOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`

const DefaultContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 210px;

  p {
    font-size: ${fonts.size.small};
    line-height: ${fonts.lineHeight.small};
    font-weight: ${fonts.weight.book};
    color: ${colors.neutral1};
  }

  span {
    font-size: ${fonts.size.micro};
    line-height: 18px;
    font-weight: ${fonts.weight.medium};
    color: ${colors.neutral2};

    &.uniswap {
      background: linear-gradient(0deg, #4673fa -101.76%, #9646fa 101.76%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

const CustomOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

const CustomOptionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const CustomOptionLabel = styled.div`
  p {
    font-size: ${fonts.size.small};
    line-height: ${fonts.lineHeight.small};
    font-weight: ${fonts.weight.book};
    color: ${colors.neutral1};

    &.uniswap {
      background: linear-gradient(0deg, #4673fa -101.76%, #9646fa 101.76%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`
