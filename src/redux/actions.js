import { API_KEY, API_URL } from '../constants'
import { roundToThousandths } from '../utils'
import * as types from './types'

export const disableButtons = () => ({ type: types.DISABLE_BUTTONS })

export const enableButtons = () => ({ type: types.ENABLE_BUTTONS })

export const fetchRates = () => async dispatch => {
  dispatch(disableButtons())
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      apikey: API_KEY
    }
  }
  try {
    const response = await fetch(API_URL, requestOptions)
    const data = await response.json()
    if (response.ok) {
      dispatch({ type: types.FETCH_RATES, payload: data.rates })
      dispatch(enableButtons())
    } else {
      throw new Error(data.message)
    }
  } catch (error) {
    console.error(error)
  }
}

export const handleAmount1Change = amount => (dispatch, getState) => {
  const {
    converter: { rates, currency1, currency2 }
  } = getState()
  const amount1 = amount
  const amount2 = roundToThousandths((amount1 * rates[currency2]) / rates[currency1])
  dispatch({
    type: types.HANDLE_CHANGE,
    payload: {
      amount1,
      amount2
    }
  })
}

export const handleAmount2Change = amount => (dispatch, getState) => {
  const {
    converter: { rates, currency1, currency2 }
  } = getState()
  const amount2 = amount
  const amount1 = roundToThousandths((amount2 * rates[currency1]) / rates[currency2])
  dispatch({
    type: types.HANDLE_CHANGE,
    payload: {
      amount1,
      amount2
    }
  })
}

export const handleCurrency1Change = currency => (dispatch, getState) => {
  const {
    converter: { rates, amount1, currency2 }
  } = getState()
  const currency1 = currency
  const amount2 = roundToThousandths((amount1 * rates[currency2]) / rates[currency1])
  dispatch({
    type: types.HANDLE_CHANGE,
    payload: {
      amount2,
      currency1
    }
  })
}

export const handleCurrency2Change = currency => (dispatch, getState) => {
  const {
    converter: { rates, amount2, currency1 }
  } = getState()
  const currency2 = currency
  const amount1 = roundToThousandths((amount2 * rates[currency1]) / rates[currency2])
  dispatch({
    type: types.HANDLE_CHANGE,
    payload: {
      amount1,
      currency2
    }
  })
}
