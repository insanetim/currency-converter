import { Input, Select } from 'antd'
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

const InputField = ({ amount, handleAmountChange, currency, handleCurrencyChange }) => {
  const loading = useSelector(state => state.app.loading)

  return (
    <div className='flex-1'>
      <div className='main-input'>
        <Input.Group compact>
          <Input
            style={{ width: '70%' }}
            value={amount}
            type='number'
            min={0}
            onChange={e => handleAmountChange(e.target.value)}
            disabled={loading}
          />
          <Select
            style={{ width: '30%' }}
            value={currency}
            options={options}
            onChange={value => handleCurrencyChange(value)}
            disabled={loading}
          />
        </Input.Group>
      </div>
    </div>
  )
}

export default InputField
