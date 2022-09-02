import axios from 'axios'
import { useReducer } from 'react'

import { AppContext } from './AppContext'
import { AppReducer } from './AppReducer'
import {
  FETCH_RATES,
  HANDLE_AMOUNT_1_CHANGE,
  HANDLE_AMOUNT_2_CHANGE,
  HANDLE_CURRENCY_1_CHANGE,
  HANDLE_CURRENCY_2_CHANGE,
  SHOW_LOADER,
} from '../types'
import { API_URL } from '../../constants'

export const AppState = ({ children }) => {
  const initialState = {
    rates: undefined,
    loading: false,
    amount1: 0,
    amount2: 0,
    currency1: 'USD',
    currency2: 'UAH',
  }
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const showLoader = () => dispatch({ type: SHOW_LOADER })

  const fetchRates = async () => {
    showLoader()
    const res = await axios.get(API_URL).catch(error => console.error(error))
    const payload = {
      rates: res.data.rates,
    }
    dispatch({ type: FETCH_RATES, payload })
  }

  const handleAmount1Change = amount =>
    dispatch({
      type: HANDLE_AMOUNT_1_CHANGE,
      payload: {
        amount,
      },
    })
  const handleAmount2Change = amount =>
    dispatch({
      type: HANDLE_AMOUNT_2_CHANGE,
      payload: {
        amount,
      },
    })
  const handleCurrency1Change = currency =>
    dispatch({
      type: HANDLE_CURRENCY_1_CHANGE,
      payload: {
        currency,
      },
    })
  const handleCurrency2Change = currency =>
    dispatch({
      type: HANDLE_CURRENCY_2_CHANGE,
      payload: {
        currency,
      },
    })

  return (
    <AppContext.Provider
      value={{
        showLoader,
        fetchRates,
        handleAmount1Change,
        handleCurrency1Change,
        handleAmount2Change,
        handleCurrency2Change,
        rates: state.rates,
        loading: state.loading,
        amount1: state.amount1,
        amount2: state.amount2,
        currency1: state.currency1,
        currency2: state.currency2,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
