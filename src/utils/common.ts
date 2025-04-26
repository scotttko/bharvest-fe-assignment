export function capitalizeFirstLetter(str: string) {
  if (!str) {
    return ''
  }

  return str[0].toUpperCase() + str.slice(1)
}

export function commaizeNumber(value: string | number) {
  const numStr = String(value)

  if (isNaN(Number(value))) {
    return numStr
  }

  const commaRegex = /\B(?=(\d{3})+(?!\d))/g

  if (numStr.includes('.')) {
    // 소수일 경우
    const splited = numStr.split('.')
    const integers = splited[0].replace(commaRegex, ',')
    const decimals = splited[1]

    return `${integers}${decimals ? `.${decimals}` : ''}`
  } else {
    // 정수일 경우
    return numStr.replace(commaRegex, ',')
  }
}

export function getDecimalNumber(value: string) {
  let numVal = value.replace(/[^\d.]/g, '')

  const firstDecimalPointIndex = numVal.indexOf('.')
  if (firstDecimalPointIndex !== -1) {
    const integers = numVal.slice(0, firstDecimalPointIndex)
    const decimals = numVal.slice(firstDecimalPointIndex + 1).replace(/\./g, '')

    numVal = integers + '.' + decimals
  }

  return numVal
}

export function parseUnit(value: string, decimals: number): bigint {
  const [integerPart, decimalPart = ''] = value.split('.')

  const decimalPadded = (decimalPart + '0'.repeat(decimals)).slice(0, decimals)
  const fullString = integerPart + decimalPadded

  return BigInt(fullString || '0')
}

export function formatUnit(value: bigint, decimals: number): string {
  const str = value.toString().padStart(decimals + 1, '0')
  const integerPart = str.slice(0, -decimals)
  const decimalPart = str.slice(-decimals).replace(/0+$/, '')

  // console.log({ integerPart, decimalPart })
  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart
}

export function abbreviateNumber(value: string) {
  const num = Number(value)
  if (isNaN(num)) {
    return num.toString()
  }

  let formattedNum = ''
  let unit = ''

  if (num >= 1e12) {
    formattedNum = (num / 1e12).toFixed(1)
    unit = 'T'
  } else if (num >= 1e9) {
    formattedNum = (num / 1e9).toFixed(1)
    unit = 'B'
  } else if (num >= 1e6) {
    formattedNum = (num / 1e6).toFixed(1)
    unit = 'M'
  } else {
    formattedNum = num.toString()
  }

  return commaizeNumber(formattedNum) + unit
}

export function multiply(factor1: string, factor2: string) {
  const precision = 10n ** 18n
  const precisonLen = [...precision.toString()].filter((char) => char === '0').length

  const factor1Value = parseUnit(factor1, precisonLen)
  const factor2Value = parseUnit(factor2, precisonLen)

  const multipliedValue = formatUnit((factor1Value * factor2Value) / precision, precisonLen)

  return multipliedValue
}

export function divide(dividend: string, divisor: string) {
  const precision = 10n ** 18n
  const precisonLen = [...precision.toString()].filter((char) => char === '0').length

  const dividendValue = parseUnit(dividend, precisonLen)
  const divisorValue = parseUnit(divisor, precisonLen)

  const dividedValue = formatUnit((dividendValue * precision) / divisorValue, precisonLen)

  return dividedValue
}
