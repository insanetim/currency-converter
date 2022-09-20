import { DISABLE_BUTTONS, ENABLE_BUTTONS } from './types'

const initialState = {
  loading: false
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case DISABLE_BUTTONS:
      return { ...state, loading: true }
    case ENABLE_BUTTONS:
      return { ...state, loading: false }
    default:
      return state
  }
}
