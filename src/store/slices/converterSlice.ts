import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { CURRENCIES, Currency } from '../../interfaces/api'

export interface ConverterState {
  amount1: number
  amount2: number
  currency1: Currency
  currency2: Currency
}

type StateMap<Type> = {
  [Property in keyof Type as string]: Type[Property]
}

const initialState: ConverterState = {
  amount1: 0,
  amount2: 0,
  currency1: CURRENCIES.USD,
  currency2: CURRENCIES.UAH
}

export const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    handleChange(
      state: StateMap<ConverterState>,
      action: PayloadAction<Partial<ConverterState>>
    ) {
      Object.entries(action.payload).forEach(([key, value]) => {
        state[key] = value
      })
    }
  },
  selectors: {
    converterSelector: state => state
  }
})

export const converterActions = converterSlice.actions

export const { converterSelector } = converterSlice.selectors

export default converterSlice.reducer
