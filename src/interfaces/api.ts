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
  base_code: CURRENCIES.USD
  documentation: string
  provider: string
  rates: Rates
  result: 'success' | 'error'
  terms_of_use: string
  time_eol_unix: number
  time_last_update_unix: number
  time_last_update_utc: string
  time_next_update_unix: string
  time_next_update_utc: string
}
