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
    rates,
    isLoading,
    handleAmount1Change,
    handleAmount2Change,
    handleCurrency1Change,
    handleCurrency2Change
  } = useContainer()

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
