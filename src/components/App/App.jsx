import { useState } from 'react';
import Info from '../Info/Info.jsx';
import Header from '../Header/Header.jsx';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import './App.scss';

//! App 
function App() {
  const [isBurgerMenu, setBurgerMenuStatus] = useState(false);

  function handleOpenSideMenu() {
    setBurgerMenuStatus(!isBurgerMenu);
  }

  //! Handler close side menu
  function handleCloseSideMenu() {
    setBurgerMenuStatus(false);
  }

  return (
    <div className='app__content'>
      <Header onBurgerClick={handleOpenSideMenu} />
      <Info />
      <BurgerMenu
        isBurgerMenu={isBurgerMenu}
        onClose={handleCloseSideMenu}
      />
    </div>
  );
}

export default App;
