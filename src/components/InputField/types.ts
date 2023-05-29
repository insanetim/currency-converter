export interface InputFieldProps {
  amount: number
  currency: string
  isLoading: boolean
  handleAmountChange(amount: string): void
  handleCurrencyChange(currency: string): void
}
