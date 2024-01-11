import { Link } from 'react-router-dom';
import './Info.scss';

//! Promo
function Info() {
  return (
    <section className='info'>
      <div className='info__wrapper'>
        <div className='info__column info__column_position_left'>
          <h1 className='info__title'>
            <span className='info__title-uppercase'>Путешествие </span>на
            красную планету
          </h1>
          <button className='info__btn-start' type='button'>
            Начать путешествие
          </button>
        </div>
        <div className='info__column info__column_position_right'>
          <ul className='info__list'>
            <li className='info__list-item'>
              <Link
                to='/'
                className='info__link info__link_position_left info__link_position_top'
              >
                <span className='info__text-accent-small'>мы</span>
                <span className='info__text-accent-big'> 1 </span>на рынке
              </Link>
            </li>
            <li className='info__list-item'>
              <Link to='/' className='info__link info__link_position_top'>
                гарантируем
                <span className='info__text-accent-big'> 50% </span>
                безопасность
              </Link>
            </li>
            <li className='info__list-item'>
              <Link
                to='/'
                className='info__link info__link_position_left info__link_position_bottom'
              >
                календарик за
                <span className='info__text-accent-big'>
                  {' '}
                  2001<span className='info__text-accent-small-bold'>г. </span>
                </span>
                в подарок
              </Link>
            </li>
            <li className='info__list-item'>
              <Link to='/' className='info__link info__link_position_bottom'>
                путешествие
                <span className='info__text-accent-big'> 597 </span>дней
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Info;
