import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ApiResponse, CURRENCIES, Rates } from '../../interfaces/api'

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: headers => {
      headers.set('apikey', process.env.REACT_APP_API_KEY as string)
    }
  }),
  endpoints: builder => ({
    getRates: builder.query<Rates, void>({
      query: () => ({
        url: 'latest',
        params: {
          base: CURRENCIES.USD,
          symbols: Object.values(CURRENCIES)
        }
      }),
      transformResponse: (response: ApiResponse) => response.rates
    })
  })
})

export const { useGetRatesQuery } = apiSlice

export default apiSlice
