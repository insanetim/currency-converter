import {
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
  FETCH_RATES,
  HANDLE_CHANGE
} from '../types'

const handlers = {
  [FETCH_RATES]: (state, { payload }) => ({
    ...state,
    rates: payload
  }),
  [DISABLE_BUTTONS]: state => ({ ...state, disabled: true }),
  [ENABLE_BUTTONS]: state => ({ ...state, disabled: false }),
  [HANDLE_CHANGE]: (state, { payload }) => ({
    ...state,
    ...payload
  }),
  DEFAULT: state => state
}

export const AppReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
