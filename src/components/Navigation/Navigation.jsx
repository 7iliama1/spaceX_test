import { Link } from 'react-router-dom';
import './Navigation.scss';

//! Navigation
function Navigation({ isSideMenu, onClose }) {
  return (
    <nav className={`navigation ${isSideMenu ? '' : 'navigation_hidden'}`}>
      <ul
        className={`navigation__list ${
          isSideMenu ? 'navigation__list_direction_column' : ''
        }`}
      >
        <li className='navigation__item'>
          <Link
            to='/'
            className={`navigation__link ${
              isSideMenu ? 'navigation__link_place_burger-menu' : ''
            }`}
            onClick={onClose}
          >
            Главная
          </Link>
        </li>
        <li className='navigation__item'>
          <Link
            to='/'
            className={`navigation__link ${
              isSideMenu ? 'navigation__link_place_burger-menu' : ''
            }`}
            onClick={onClose}
          >
            Технология
          </Link>
        </li>
        <li className='navigation__item'>
          <Link
            to='/'
            className={`navigation__link ${
              isSideMenu ? 'navigation__link_place_burger-menu' : ''
            }`}
            onClick={onClose}
          >
            График полётов
          </Link>
        </li>
        <li className='navigation__item'>
          <Link
            to='/'
            className={`navigation__link ${
              isSideMenu ? 'navigation__link_place_burger-menu' : ''
            }`}
            onClick={onClose}
          >
            Гарантии
          </Link>
        </li>
        <li className='navigation__item'>
          <Link
            to='/'
            className={`navigation__link ${
              isSideMenu ? 'navigation__link_place_burger-menu' : ''
            }`}
            onClick={onClose}
          >
            О компании
          </Link>
        </li>
        <li className='navigation__item'>
          <Link
            to='/'
            className={`navigation__link ${
              isSideMenu ? 'navigation__link_place_burger-menu' : ''
            }`}
            onClick={onClose}
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
