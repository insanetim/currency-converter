import { Currency, Rates } from '../../interfaces/api'
import { ConverterState } from '../../store/slices/converterSlice'

export interface ConverterHookReturn extends ConverterState {
  rates: Rates | undefined
  isLoading: boolean
  handleAmount1Change(amount: number): void
  handleAmount2Change(amount: number): void
  handleCurrency1Change(currency: Currency): void
  handleCurrency2Change(currency: Currency): void
}
