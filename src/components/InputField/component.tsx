import { Input, Select } from 'antd'

import { InputFieldProps } from './types'

const InputField: React.FC<InputFieldProps> = ({
  amount,
  currency,
  handleAmountChange,
  handleCurrencyChange,
  isLoading
}) => {
  const options = [
    { label: 'UAH', value: 'UAH' },
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' }
  ]

  return (
    <div className='flex-1'>
      <div className='main-input'>
        <Input.Group compact>
          <Input
            disabled={isLoading}
            min={0}
            onChange={e => handleAmountChange(e.target.value)}
            style={{ width: '70%' }}
            type='number'
            value={amount}
          />
          <Select
            disabled={isLoading}
            onChange={value => handleCurrencyChange(value)}
            options={options}
            style={{ width: '30%' }}
            value={currency}
          />
        </Input.Group>
      </div>
    </div>
  )
}

export default InputField
