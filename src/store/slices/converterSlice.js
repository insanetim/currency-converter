import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount1: 0,
  amount2: 0,
  currency1: 'USD',
  currency2: 'UAH'
}

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    handleChange(state, action) {
      Object.entries(action.payload).forEach(([key, value]) => {
        state[key] = value
      })
    }
  }
})

export const { handleChange } = converterSlice.actions

export default converterSlice.reducer
