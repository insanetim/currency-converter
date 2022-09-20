import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import appReducer from './appReducer'
import converterReducer from './converterReducer'

const store = configureStore({
  reducer: {
    app: appReducer,
    converter: converterReducer
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
