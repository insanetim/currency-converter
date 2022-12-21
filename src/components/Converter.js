import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'antd'

import { useGetRatesQuery } from '../store/api/apiSlice'
import { handleChange } from '../store/slices/converterSlice'
import { roundToThousandths } from '../utils'

import Header from './Header'
import InputField from './InputField'

const Converter = () => {
  const { isLoading, data: rates } = useGetRatesQuery()
  const dispatch = useDispatch()
  const { amount1, amount2, currency1, currency2 } = useSelector(state => state.converter)

  const handleAmount1Change = amount => {
    const amount1 = +amount
    const amount2 = roundToThousandths((amount1 * rates[currency2]) / rates[currency1])
    dispatch(handleChange({ amount1, amount2 }))
  }

  const handleAmount2Change = amount => {
    const amount2 = +amount
    const amount1 = roundToThousandths((amount2 * rates[currency1]) / rates[currency2])
    dispatch(handleChange({ amount1, amount2 }))
  }

  const handleCurrency1Change = currency => {
    const currency1 = currency
    const amount2 = roundToThousandths((amount1 * rates[currency2]) / rates[currency1])
    dispatch(handleChange({ amount2, currency1 }))
  }

  const handleCurrency2Change = currency => {
    const currency2 = currency
    const amount1 = roundToThousandths((amount2 * rates[currency1]) / rates[currency2])
    dispatch(handleChange({ amount1, currency2 }))
  }

  return (
    <div className='main-wrap'>
      <div className='main-card'>
        <Header rates={rates} />
        <div className='main-card__inputs'>
          <Row gutter={[24, 24]}>
            <Col
              span={24}
              md={12}
            >
              <InputField
                amount={amount1}
                handleAmountChange={handleAmount1Change}
                currency={currency1}
                handleCurrencyChange={handleCurrency1Change}
                isLoading={isLoading}
              />
            </Col>
            <Col
              span={24}
              md={12}
            >
              <InputField
                amount={amount2}
                handleAmountChange={handleAmount2Change}
                currency={currency2}
                handleCurrencyChange={handleCurrency2Change}
                isLoading={isLoading}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Converter
