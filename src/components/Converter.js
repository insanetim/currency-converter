import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  fetchRates,
  handleAmount1Change,
  handleAmount2Change,
  handleCurrency1Change,
  handleCurrency2Change
} from '../store/actions'
import Header from './Header'
import InputField from './InputField'

const Converter = props => {
  useEffect(() => {
    props.fetchRates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='main-wrap'>
      <div className='main-card'>
        <Header />
        <div className='main-card__inputs'>
          <Row gutter={[24, 24]}>
            <Col
              span={24}
              md={12}
            >
              <InputField
                amount={props.amount1}
                handleAmountChange={props.handleAmount1Change}
                currency={props.currency1}
                handleCurrencyChange={props.handleCurrency1Change}
              />
            </Col>
            <Col
              span={24}
              md={12}
            >
              <InputField
                amount={props.amount2}
                handleAmountChange={props.handleAmount2Change}
                currency={props.currency2}
                handleCurrencyChange={props.handleCurrency2Change}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  amount1: state.converter.amount1,
  amount2: state.converter.amount2,
  currency1: state.converter.currency1,
  currency2: state.converter.currency2
})

const mapDispatchToProps = {
  fetchRates,
  handleAmount1Change,
  handleAmount2Change,
  handleCurrency1Change,
  handleCurrency2Change
}

export default connect(mapStateToProps, mapDispatchToProps)(Converter)
