import { FETCH_RATES, HANDLE_CHANGE } from './types'

const initialState = {
  rates: null,
  amount1: 0,
  amount2: 0,
  currency1: 'USD',
  currency2: 'UAH'
}

export default function converterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RATES:
      return { ...state, rates: action.payload }
    case HANDLE_CHANGE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
