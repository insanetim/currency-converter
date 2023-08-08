import { Col, Row } from 'antd'

import Header from '../Header'
import InputField from '../InputField'
import useContainer from './hook'

const Converter: React.FC = () => {
  const {
    amount1,
    amount2,
    currency1,
    currency2,
    handleAmount1Change,
    handleAmount2Change,
    handleCurrency1Change,
    handleCurrency2Change,
    isLoading,
    rates
  } = useContainer()

  return (
    <div className='main-wrap'>
      <div className='main-card'>
        <Header rates={rates} />
        <div className='main-card__inputs'>
          <Row gutter={[24, 24]}>
            <Col
              md={12}
              span={24}
            >
              <InputField
                amount={amount1}
                currency={currency1}
                handleAmountChange={handleAmount1Change}
                handleCurrencyChange={handleCurrency1Change}
                isLoading={isLoading}
              />
            </Col>
            <Col
              md={12}
              span={24}
            >
              <InputField
                amount={amount2}
                currency={currency2}
                handleAmountChange={handleAmount2Change}
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
