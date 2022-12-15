import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ loggedIn }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function openMenu() {
    setIsMenuOpened(true);
  }

  function closeMenu() {
    setIsMenuOpened(false);
  }
  return (
    <div className="navigation">
      <div className={`navigation__cover ${ isMenuOpened ? "navigation__cover_active" : "" } `}></div>
      { loggedIn ? (
        
      <nav className="navigation__menu">
        <button className="navigation__button-menu" onClick={openMenu}></button>
        
        <div className={`navigation__menu-list ${ isMenuOpened ? "navigation__menu-list_active" : "" } `}>
            <button className="navigation__clouse-button" onClick={closeMenu}></button>
            <ul className="navigation__conteiner-list-links">
              <li><Link to='/' className="navigation_list-link" onClick={closeMenu}>Главная</Link></li>
              <li><Link to='/movies' className="navigation_list-link navigation_list-link_active" onClick={closeMenu}>Фильмы</Link></li>
              <li><Link to='/saved-movies' className="navigation_list-link" onClick={closeMenu}>Сохранённые фильмы</Link></li>
            </ul>
            <div className="navigation__grey-button"><Link to='/profile' className="navigation_link navigation__text-grey-button" onClick={closeMenu}>Аккаунт</Link></div>
          </div>

        <div className="navigation__logged-in">
          <div className="navigation__conteiner-links">
            <Link to='/movies' className="navigation_link">Фильмы</Link>
            <Link to='/saved-movies' className="navigation_link">Сохранённые фильмы</Link>
          </div>
          <div className="navigation__grey-button"><Link to='/profile' className="navigation_link navigation__text-grey-button">Аккаунт</Link></div>
        </div>
      </nav>
      ) : (
      <nav>
        <ul className="navigation__not-logged-in">
          <li><Link to='/sign-up' className="navigation_link">Регистрация</Link></li>
          <li><Link to='/sign-in' className="navigation_link navigation__green-button">Войти</Link></li>
        </ul>
      </nav>
      )}
    </div>
  )
}

export default Navigation;