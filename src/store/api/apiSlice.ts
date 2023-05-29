import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createSelector } from '@reduxjs/toolkit'

import { API_KEY, API_URL } from '../../constants'
import { ApiResponse, Rates } from '../../interfaces/api'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: headers => {
      headers.set('apikey', API_KEY)
    }
  }),
  endpoints: builder => ({
    getRates: builder.query<Rates, void>({
      query: () => ({
        url: 'latest',
        params: {
          symbols: ['USD', 'EUR', 'UAH'],
          base: 'USD'
        }
      }),
      transformResponse: (response: ApiResponse) => response.rates
    })
  })
})

export const { useGetRatesQuery } = apiSlice

const emptyRates = {}

const selectRatesResult = apiSlice.endpoints.getRates.select()

export const selectRatesData = createSelector(selectRatesResult, ratesResult => ratesResult.data ?? emptyRates)
