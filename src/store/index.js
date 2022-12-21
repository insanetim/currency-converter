import { configureStore } from '@reduxjs/toolkit'

import apiSlice from './api/apiSlice'
import converterReducer from './slices/converterSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    converter: converterReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
