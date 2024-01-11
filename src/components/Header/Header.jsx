import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import logo from '../../assets/images/logo.png';
import './Header.scss';

//! Header
function Header({ onBurgerClick }) {
  return (
    <header className='header'>
      <div className='header__wrapper' style={{ color: '#fff' }}>
        <Link to='/' className='header__link'>
          <img src={logo} alt='Лого SpaceX' className='header__logo' />
        </Link>
        <Navigation />
        <button
          className='header__btn-burger'
          type='button'
          aria-label='Меню навигации'
          onClick={onBurgerClick}
        ></button>
      </div>
    </header>
  );
}

export default Header;
