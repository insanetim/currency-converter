import { useReducer } from 'react'

import { AppContext } from './AppContext'
import { AppReducer } from './AppReducer'
import {
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
  FETCH_RATES,
  HANDLE_CHANGE
} from '../types'
import { API_KEY, API_URL } from '../../constants'
import { roundToThousandths } from '../../utils'

export const AppState = ({ children }) => {
  const initialState = {
    rates: undefined,
    disabled: false,
    amount1: 0,
    amount2: 0,
    currency1: 'USD',
    currency2: 'UAH'
  }
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const fetchRates = async () => {
    disableButtons()
    const myHeaders = new Headers()
    myHeaders.append('apikey', API_KEY)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    }
    try {
      const data = await fetch(API_URL, requestOptions).then(res => res.json())
      dispatch({ type: FETCH_RATES, payload: data.rates })
    } catch (error) {
      console.error(error)
    }
    enableButtons()
  }

  const disableButtons = () => dispatch({ type: DISABLE_BUTTONS })

  const enableButtons = () => dispatch({ type: ENABLE_BUTTONS })

  const handleAmount1Change = amount => {
    const amount1 = amount
    const amount2 = roundToThousandths(
      (amount1 * state.rates[state.currency2]) / state.rates[state.currency1]
    )
    dispatch({
      type: HANDLE_CHANGE,
      payload: {
        amount1,
        amount2
      }
    })
  }

  const handleAmount2Change = amount => {
    const amount2 = amount
    const amount1 = roundToThousandths(
      (amount2 * state.rates[state.currency1]) / state.rates[state.currency2]
    )
    dispatch({
      type: HANDLE_CHANGE,
      payload: {
        amount1,
        amount2
      }
    })
  }

  const handleCurrency1Change = currency => {
    const currency1 = currency
    const amount2 = roundToThousandths(
      (state.amount1 * state.rates[state.currency2]) / state.rates[currency1]
    )
    dispatch({
      type: HANDLE_CHANGE,
      payload: {
        amount2,
        currency1
      }
    })
  }

  const handleCurrency2Change = currency => {
    const currency2 = currency
    const amount1 = roundToThousandths(
      (state.amount2 * state.rates[state.currency1]) / state.rates[currency2]
    )
    dispatch({
      type: HANDLE_CHANGE,
      payload: {
        amount1,
        currency2
      }
    })
  }

  return (
    <AppContext.Provider
      value={{
        fetchRates,
        handleAmount1Change,
        handleCurrency1Change,
        handleAmount2Change,
        handleCurrency2Change,
        ...state
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
