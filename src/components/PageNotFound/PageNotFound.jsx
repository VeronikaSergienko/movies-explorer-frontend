import React from "react";
import { Link } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {
  return (
      <div className="page-not-found">
        <h1 className="page-not-found__title">404</h1>
        <h2 className="page-not-found__subtitle">Страница не найдена</h2>
        <Link to="/sign-in" className="page-not-found__link">Назад</Link>
      </div>
  );
}

export default PageNotFound;
