import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Login/Login.css';
import '../Header/Header.css';

function Register({ onRegister }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeName(e) {
    setUserName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      name: userName,
      email,
      password,
    });
  }
  return (
    <div className="login">
      <div className="login__box">
        <Link to="/" className="header__logo"></Link>
        <h2 className="form__title">Добро пожаловать!</h2>
        <form className="form" onSubmit={handleSubmit}>
        <div className="form__input-conteiner">
          <p className="form__input-name">Имя</p>
            <input
              type="text"
              value={userName}
              onChange={handleChangeName}
              className="form__input"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__input-error"></span>
          </div>
          <div className="form__input-conteiner">
            <p className="form__input-name">E-mail</p>
            <input
              type="e-mail"
              value={email}
              // pattern="https?:\/\/[\w/?.&-=]+$"
              onChange={handleChangeEmail}
              className="form__input"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__input-error"></span>
          </div>
          <div className="form__input-conteiner">
            <p className="form__input-name">Пароль</p>
            <input
              type="password"
              value={password}
              onChange={handleChangePassword}
              className="form__input"
              required
            />
            <span className="form__input-error"></span>
          </div>
          <button type="submit" className="form__save-button">
            Зарегистрироваться
          </button>
        </form>
        <div className="form__signin">
          <p className="form__text">Уже зарегистрированы? </p>
          <Link to="/sign-in" className="form__login-link">
            Войти
          </Link>
        </div>
      </div>
    </div>  
  );
}

export default Register;
