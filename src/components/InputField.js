import { Input, Select } from 'antd'

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

const InputField = ({ amount, handleAmountChange, currency, handleCurrencyChange, isLoading }) => {
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
            disabled={isLoading}
          />
          <Select
            style={{ width: '30%' }}
            value={currency}
            options={options}
            onChange={value => handleCurrencyChange(value)}
            disabled={isLoading}
          />
        </Input.Group>
      </div>
    </div>
  )
}

export default InputField
