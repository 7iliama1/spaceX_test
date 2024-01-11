import './BurgerMenu.scss';
import Overlay from '../Overlay/Overlay.jsx';
import Navigation from '../Navigation/Navigation.jsx';

//! Burger menu component
function BurgerMenu({ isBurgerMenu, onClose }) {
  return (
    <Overlay isActive={isBurgerMenu} onClose={onClose}>
      <div
        className={`burger-menu ${
          isBurgerMenu ? 'burger-menu_active' : ''
        }`}
      >
        <button
          className='burger-menu__btn-close hover-button'
          type='button'
          aria-label='Закрыть меню'
          onClick={onClose}
        ></button>
        <Navigation isSideMenu={true} onClose={onClose} />
      </div>
    </Overlay>
  );
}

export default BurgerMenu;
