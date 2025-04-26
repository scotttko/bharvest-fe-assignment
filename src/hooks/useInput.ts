import { getDecimalNumber } from '@/utils/common'
import { ChangeEvent, useState } from 'react'

interface UseInputProps {
  type?: 'text' | 'number'
}
function useInput(props?: UseInputProps) {
  const { type = 'text' } = props ?? {}

  const [inputValue, setInputValue] = useState('')

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target

    if (type === 'text') {
      setInputValue(value)
      return
    }

    setInputValue(getDecimalNumber(value))
  }

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }

  return { value: inputValue, onChange: handleChange, onInputChange: handleInputChange }
}

export default useInput
