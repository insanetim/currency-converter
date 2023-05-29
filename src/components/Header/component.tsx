import type { HeaderProps } from './types'
import { roundToThousandths } from '../../utils'

const Header: React.FC<HeaderProps> = ({ rates }) => {
  return (
    <div className='main-header'>
      <div className='main-header__title'>
        <span>USD/UAH:</span>
        <span className='ml-4'>{rates && roundToThousandths(rates['UAH'])}</span>
      </div>
      <div className='main-header__title'>
        <span>EUR/UAH:</span>
        <span className='ml-4'>{rates && roundToThousandths(rates['UAH'] / rates['EUR'])}</span>
      </div>
    </div>
  )
}

export default Header
