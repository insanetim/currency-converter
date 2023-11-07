import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ApiResponse, CURRENCIES, Rates } from '../../interfaces/api'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: headers => {
      headers.set('apikey', process.env.REACT_APP_API_KEY as string)
    }
  }),
  endpoints: builder => ({
    getRates: builder.query<Rates, void>({
      query: () => ({
        params: {
          base: CURRENCIES.USD,
          symbols: Object.values(CURRENCIES)
        },
        url: 'latest'
      }),
      transformResponse: (response: ApiResponse) => response.rates
    })
  }),
  reducerPath: 'api'
})

export const { useGetRatesQuery } = apiSlice
