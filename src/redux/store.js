import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appReducer'
import converterReducer from './converterReducer'

const store = configureStore({
  reducer: {
    app: appReducer,
    converter: converterReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
