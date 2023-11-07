export enum CURRENCIES {
  EUR = 'EUR',
  UAH = 'UAH',
  USD = 'USD'
}

export type Currency = keyof typeof CURRENCIES

export type Rates = {
  [K in Currency]: number
}

export interface ApiResponse {
  base: CURRENCIES.USD
  date: string
  rates: Rates
  success: boolean
  timestamp: number
}
