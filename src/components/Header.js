import { useContext } from 'react'
import { AppContext } from '../context/app/AppContext'
import { roundToThousandths } from '../utils'

const Header = () => {
  const { rates } = useContext(AppContext)

  return (
    <div className='main-header'>
      <div className='main-header__title'>
        <span>USD/UAH:</span>
        <span className='ml-4'>
          {rates && roundToThousandths(rates['UAH'])}
        </span>
      </div>
      <div className='main-header__title'>
        <span>EUR/UAH:</span>
        <span className='ml-4'>
          {rates && roundToThousandths(rates['UAH'] / rates['EUR'])}
        </span>
      </div>
    </div>
  )
}

export default Header
