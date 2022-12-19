import React from "react";
import { Route, Link } from "react-router-dom";
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const pathname = [
    "/",
    "/movies",
    "/saved-movies",
    "/profile",
  ];
  return (
    <Route exact path={pathname}>
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <div className="header__conteiner">
        <Navigation loggedIn={loggedIn} />
      </div>
    </header>
    </Route>
  );
}

export default Header;
