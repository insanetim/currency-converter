export type Currency = 'EUR' | 'UAH' | 'USD'

export type Rates = {
  [K in Currency]: number
}

export interface ApiResponse {
  base: 'USD'
  date: string
  rates: Rates
  success: boolean
  timestamp: number
}
