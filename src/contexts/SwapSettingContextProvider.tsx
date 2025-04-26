import { SwapAction } from '@/models/tokens'
import { getDecimalNumber } from '@/utils/common'
import {
  ChangeEvent,
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface TradeOptions {
  default: boolean
  uniswapX: boolean
  v4Pools: boolean
  v3Pools: boolean
  v2Pools: boolean
}

type TradeOptionValue = keyof TradeOptions

interface MaxSlippage {
  auto: boolean
  value: string
}

interface SwapSettingContextValue {
  maxSlippage: MaxSlippage
  onChangeSlippage: (ev: ChangeEvent<HTMLInputElement>) => void
  onChangeSlippageAuto: () => void

  deadline: string
  onChangeDeadline: (ev: ChangeEvent<HTMLInputElement>) => void

  tradeOptions: TradeOptions
  onChangeTradeOptions: (ption: TradeOptionValue) => void
}

const defaultValues: SwapSettingContextValue = {
  maxSlippage: { auto: true, value: '' },
  onChangeSlippage: () => {},
  onChangeSlippageAuto: () => {},

  deadline: '30',
  onChangeDeadline: () => {},

  tradeOptions: {
    default: true,
    uniswapX: true,
    v4Pools: true,
    v3Pools: true,
    v2Pools: true,
  },
  onChangeTradeOptions: () => {},
}

export const oppositeActions: { [key in SwapAction]: SwapAction } = {
  sell: 'buy',
  buy: 'sell',
}

const Context = createContext<SwapSettingContextValue>(defaultValues)

function SwapSettingContextProvider({ children }: PropsWithChildren) {
  const [maxSlippage, setMaxSlippage] = useState<MaxSlippage>({ auto: true, value: '' })
  const [deadline, setDeadline] = useState<string>('30')
  const [tradeOptions, setTradeOptions] = useState<TradeOptions>({
    default: true,
    uniswapX: false,
    v4Pools: false,
    v3Pools: false,
    v2Pools: false,
  })

  const handleChangeDeadline = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target

    const numVal = getDecimalNumber(value)

    setDeadline(Number(numVal) > 4320 ? '4320' : numVal)
  }, [])

  const handleChangeSlippage = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target

    const numVal = getDecimalNumber(value)

    if (Number(numVal) > 100 || numVal.length > 4) {
      return
    }

    setMaxSlippage({ auto: false, value: numVal })
  }, [])

  const handleSlippageAutoChange = useCallback(() => {
    setMaxSlippage((prev) => (!prev.auto ? { auto: true, value: '0.5' } : { ...prev }))
  }, [])

  const handleChangeTradeOptions = useCallback((option: TradeOptionValue) => {
    if (option === 'default') {
      setTradeOptions((prev) => ({
        default: !prev.default,
        uniswapX: prev.default,
        v4Pools: prev.default,
        v3Pools: prev.default,
        v2Pools: prev.default,
      }))
    } else {
      setTradeOptions((prev) => ({ ...prev, [option]: !prev[option] }))
    }
  }, [])

  const values = useMemo(
    () => ({
      maxSlippage,
      deadline,
      tradeOptions,
      onChangeSlippage: handleChangeSlippage,
      onChangeSlippageAuto: handleSlippageAutoChange,
      onChangeDeadline: handleChangeDeadline,
      onChangeTradeOptions: handleChangeTradeOptions,
    }),
    [
      maxSlippage,
      deadline,
      tradeOptions,
      handleChangeSlippage,
      handleSlippageAutoChange,
      handleChangeDeadline,
      handleChangeTradeOptions,
    ],
  )

  return <Context.Provider value={values}>{children}</Context.Provider>
}

export default SwapSettingContextProvider

export function useSwapSettingContext() {
  const values = useContext(Context)

  if (values == null) {
    throw new Error('SwapSettingContext 내부에서 사용해주세요')
  }

  return values
}
