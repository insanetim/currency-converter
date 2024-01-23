import { Currency } from '../../interfaces/api'

export interface InputFieldProps {
  amount: number
  currency: Currency
  isLoading: boolean
  handleAmountChange: (amount: number) => void
  handleCurrencyChange: (currency: Currency) => void
}
