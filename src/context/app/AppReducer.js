import { roundToThousandths } from '../../utils'
import {
  FETCH_RATES,
  HANDLE_AMOUNT_1_CHANGE,
  HANDLE_AMOUNT_2_CHANGE,
  HANDLE_CURRENCY_1_CHANGE,
  HANDLE_CURRENCY_2_CHANGE,
  SHOW_LOADER,
} from '../types'

const handlers = {
  [SHOW_LOADER]: state => ({ ...state, loading: true }),
  [FETCH_RATES]: (state, { payload }) => ({
    ...state,
    rates: payload.rates,
    loading: false,
  }),
  [HANDLE_AMOUNT_1_CHANGE]: (state, { payload }) => {
    const amount1 = payload.amount
    const amount2 = roundToThousandths(
      (amount1 * state.rates[state.currency2]) / state.rates[state.currency1]
    )
    return {
      ...state,
      amount1,
      amount2,
    }
  },
  [HANDLE_AMOUNT_2_CHANGE]: (state, { payload }) => {
    const amount2 = payload.amount
    const amount1 = roundToThousandths(
      (amount2 * state.rates[state.currency1]) / state.rates[state.currency2]
    )
    return {
      ...state,
      amount1,
      amount2,
    }
  },
  [HANDLE_CURRENCY_1_CHANGE]: (state, { payload }) => {
    const currency1 = payload.currency
    const amount2 = roundToThousandths(
      (state.amount1 * state.rates[state.currency2]) / state.rates[currency1]
    )
    return {
      ...state,
      currency1,
      amount2,
    }
  },
  [HANDLE_CURRENCY_2_CHANGE]: (state, { payload }) => {
    const currency2 = payload.currency
    const amount1 = roundToThousandths(
      (state.amount2 * state.rates[state.currency1]) / state.rates[currency2]
    )
    return {
      ...state,
      currency2,
      amount1,
    }
  },
  DEFAULT: state => state,
}

export const AppReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
