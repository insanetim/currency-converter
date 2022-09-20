import { Col, Input, Row, Select } from 'antd'
import { useSelector } from 'react-redux'

const options = [
  {
    label: 'UAH',
    value: 'UAH'
  },
  {
    label: 'USD',
    value: 'USD'
  },
  {
    label: 'EUR',
    value: 'EUR'
  }
]

const InputField = ({
  amount,
  handleAmountChange,
  currency,
  handleCurrencyChange
}) => {
  const loading = useSelector(state => state.app.loading)

  return (
    <div className='flex-1'>
      <div className='main-input'>
        <Row className='w-100'>
          <Col span={16}>
            <Input
              className='w-100'
              value={amount}
              type='number'
              min={0}
              onChange={e => handleAmountChange(e.target.value)}
              disabled={loading}
            />
          </Col>
          <Col span={8}>
            <Select
              className='w-100'
              value={currency}
              options={options}
              onChange={value => handleCurrencyChange(value)}
              disabled={loading}
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default InputField
