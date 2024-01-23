import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { Currency } from '../../interfaces/api'
import { useGetRatesQuery } from '../../store/api/apiSlice'
import { converterSelector } from '../../store/slices/converterSlice'
import { roundToThousandths } from '../../utils'
import { ConverterHookReturn } from './types'

const useContainer = (): ConverterHookReturn => {
  const { data: rates, isLoading } = useGetRatesQuery()
  const { amount1, amount2, currency1, currency2 } =
    useAppSelector(converterSelector)
  const { handleChange } = useActions()

  const handleAmount1Change = (amount: number) => {
    if (!rates) {
      return
    }
    const amount1 = amount
    const amount2 = roundToThousandths(
      (amount1 * rates[currency2]) / rates[currency1]
    )
    handleChange({ amount1, amount2 })
  }

  const handleAmount2Change = (amount: number) => {
    if (!rates) {
      return
    }
    const amount2 = amount
    const amount1 = roundToThousandths(
      (amount2 * rates[currency1]) / rates[currency2]
    )
    handleChange({ amount1, amount2 })
  }

  const handleCurrency1Change = (currency: Currency) => {
    if (!rates) {
      return
    }
    const currency1 = currency
    const amount2 = roundToThousandths(
      (amount1 * rates[currency2]) / rates[currency1]
    )
    handleChange({ amount2, currency1 })
  }

  const handleCurrency2Change = (currency: Currency) => {
    if (!rates) {
      return
    }
    const currency2 = currency
    const amount2 = roundToThousandths(
      (amount1 * rates[currency2]) / rates[currency1]
    )
    handleChange({ amount2, currency2 })
  }

  return {
    rates,
    isLoading,
    amount1,
    amount2,
    currency1,
    currency2,
    handleAmount1Change,
    handleAmount2Change,
    handleCurrency1Change,
    handleCurrency2Change
  }
}

export default useContainer
