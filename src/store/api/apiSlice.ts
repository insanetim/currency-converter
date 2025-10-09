import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ApiResponse, Rates } from '../../interfaces/api'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL
})

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: builder => ({
    getRates: builder.query<Rates, void>({
      query: () => ({
        url: 'latest/USD'
      }),
      transformResponse: (response: ApiResponse) => response.rates
    })
  })
})

export const { useGetRatesQuery } = apiSlice

export default apiSlice
