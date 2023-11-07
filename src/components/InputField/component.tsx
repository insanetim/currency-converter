import { Input, Select, Space } from 'antd'

import { CURRENCIES } from '../../interfaces/api'
import { InputFieldProps } from './types'

const InputField: React.FC<InputFieldProps> = ({
  amount,
  currency,
  handleAmountChange,
  handleCurrencyChange,
  isLoading
}) => {
  const options = [
    { label: CURRENCIES.UAH, value: CURRENCIES.UAH },
    { label: CURRENCIES.USD, value: CURRENCIES.USD },
    { label: CURRENCIES.EUR, value: CURRENCIES.EUR }
  ]

  return (
    <div className='flex-1'>
      <div className='main-input'>
        <Space.Compact block>
          <Input
            disabled={isLoading}
            min={0}
            onChange={e => handleAmountChange(e.target.value)}
            type='number'
            value={amount}
          />
          <Select
            disabled={isLoading}
            onChange={value => handleCurrencyChange(value)}
            options={options}
            value={currency}
          />
        </Space.Compact>
      </div>
    </div>
  )
}

export default InputField
