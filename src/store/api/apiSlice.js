import { createSelector } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_KEY, API_URL } from '../../constants'

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: headers => {
      headers.set('apikey', API_KEY)
    }
  }),
  endpoints: builder => ({
    getRates: builder.query({
      query: () => ({
        url: 'latest',
        params: {
          symbols: ['USD', 'EUR', 'UAH'],
          base: 'USD'
        }
      }),
      transformResponse: response => response.rates
    })
  })
})

export const { useGetRatesQuery } = apiSlice

export default apiSlice

const emptyRates = {}

const selectRatesResult = apiSlice.endpoints.getRates.select()

export const selectRatesData = createSelector(selectRatesResult, ratesResult => ratesResult.data ?? emptyRates)
