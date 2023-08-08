import { Currency, Rates } from '../../interfaces/api'
import { ConverterState } from '../../store/slices/converterSlice'

export interface ConverterHook extends ConverterState {
  handleAmount1Change(amount: string): void
  handleAmount2Change(amount: string): void
  handleCurrency1Change(currency: Currency): void
  handleCurrency2Change(currency: Currency): void
  isLoading: boolean
  rates: Rates | undefined
}
