import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { apiSlice } from './api/apiSlice'
import { converterReducer } from './slices/converterSlice'

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    converter: converterReducer
  }
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
