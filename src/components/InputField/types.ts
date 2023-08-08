export interface InputFieldProps {
  amount: number
  currency: string
  handleAmountChange(amount: string): void
  handleCurrencyChange(currency: string): void
  isLoading: boolean
}
