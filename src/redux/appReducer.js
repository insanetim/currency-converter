import * as types from './types'

const initialState = {
  loading: false
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.DISABLE_BUTTONS:
      return { ...state, loading: true }
    case types.ENABLE_BUTTONS:
      return { ...state, loading: false }
    default:
      return state
  }
}
