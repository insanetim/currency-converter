import { Col, Row } from 'antd'
import { useContext, useEffect } from 'react'

import { AppContext } from '../context/app/AppContext'
import Header from './Header'
import InputField from './InputField'

const Main = () => {
  const app = useContext(AppContext)
  useEffect(() => {
    app.fetchRates()
  }, [])

  return (
    <div className='main-wrap'>
      <div className='main-card'>
        <Header />
        <div className='main-card__inputs'>
          <Row gutter={[24, 24]}>
            <Col span={24} md={12}>
              <InputField
                amount={app.amount1}
                handleAmountChange={app.handleAmount1Change}
                currency={app.currency1}
                handleCurrencyChange={app.handleCurrency1Change}
              />
            </Col>
            <Col span={24} md={12}>
              <InputField
                amount={app.amount2}
                handleAmountChange={app.handleAmount2Change}
                currency={app.currency2}
                handleCurrencyChange={app.handleCurrency2Change}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Main
