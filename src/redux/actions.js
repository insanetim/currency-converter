import { API_KEY, API_URL } from '../constants'
import { roundToThousandths } from '../utils'
import {
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
  FETCH_RATES,
  HANDLE_CHANGE
} from './types'

export const disableButtons = () => ({ type: DISABLE_BUTTONS })

export const enableButtons = () => ({ type: ENABLE_BUTTONS })

export const fetchRates = () => async dispatch => {
  dispatch(disableButtons())
  const myHeaders = new Headers()
  myHeaders.append('apikey', API_KEY)
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  }
  try {
    const response = await fetch(API_URL, requestOptions)
    const data = await response.json()
    if (response.ok) {
      dispatch({ type: FETCH_RATES, payload: data.rates })
      dispatch(enableButtons())
    } else {
      throw new Error(data.message)
    }
  } catch (error) {
    console.error(error)
  }
}

export const handleAmount1Change = amount => (dispatch, getState) => {
  const amount1 = amount
  const amount2 = roundToThousandths(
    (amount1 * getState().rates[getState().currency2]) /
      getState().rates[getState().currency1]
  )
  dispatch({
    type: HANDLE_CHANGE,
    payload: {
      amount1,
      amount2
    }
  })
}

export const handleAmount2Change = amount => (dispatch, getState) => {
  const amount2 = amount
  const amount1 = roundToThousandths(
    (amount2 * getState().rates[getState().currency1]) /
      getState().rates[getState().currency2]
  )
  dispatch({
    type: HANDLE_CHANGE,
    payload: {
      amount1,
      amount2
    }
  })
}

export const handleCurrency1Change = currency => (dispatch, getState) => {
  const currency1 = currency
  const amount2 = roundToThousandths(
    (getState().amount1 * getState().rates[getState().currency2]) /
      getState().rates[currency1]
  )
  dispatch({
    type: HANDLE_CHANGE,
    payload: {
      amount2,
      currency1
    }
  })
}

export const handleCurrency2Change = currency => (dispatch, getState) => {
  const currency2 = currency
  const amount1 = roundToThousandths(
    (getState().amount2 * getState().rates[getState().currency1]) /
      getState().rates[currency2]
  )
  dispatch({
    type: HANDLE_CHANGE,
    payload: {
      amount1,
      currency2
    }
  })
}
