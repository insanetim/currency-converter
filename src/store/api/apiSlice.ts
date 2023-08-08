import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_KEY, API_URL } from '../../constants'
import { ApiResponse, Rates } from '../../interfaces/api'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: headers => {
      headers.set('apikey', API_KEY)
    }
  }),
  endpoints: builder => ({
    getRates: builder.query<Rates, void>({
      query: () => ({
        params: {
          base: 'USD',
          symbols: ['USD', 'EUR', 'UAH']
        },
        url: 'latest'
      }),
      transformResponse: (response: ApiResponse) => response.rates
    })
  }),
  reducerPath: 'api'
})

export const { useGetRatesQuery } = apiSlice
