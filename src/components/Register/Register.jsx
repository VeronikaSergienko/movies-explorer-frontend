import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../Login/Login.css';
import '../Header/Header.css';
import useFormWithValidation from "../../hook/useFormWithValidation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function Register({ onRegister, isErrorMessage, statusCodeErr }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm(
      {
        userName: "",
        email: "",
        password: "",
      },
      {},
      false
    );
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.userName || !values.email || !values.password) {
      return;
    }
    onRegister({
      name: values.userName,
      email: values.email,
      password: values.password,
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
              value={values.userName || ""}
              name="userName"
              onChange={handleChange}
              className="form__input"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__input-error">{errors.userName || ""}</span>
          </div>
          <div className="form__input-conteiner">
            <p className="form__input-name">E-mail</p>
            <input
              type="e-mail"
              value={values.email || ""}
              name="email"
              // pattern="https?:\/\/[\w/?.&-=]+$"
              onChange={handleChange}
              className="form__input"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__input-error">{errors.email || ""}</span>
          </div>
          <div className="form__input-conteiner">
            <p className="form__input-name">Пароль</p>
            <input
              type="password"
              name="password"
              value={values.password || ""}
              onChange={handleChange}
              className="form__input"
              required
            />
            <span className="form__input-error">{errors.password || ""}</span>
          </div>
          <ErrorMessage isErrorMessage={isErrorMessage} statusCodeErr={statusCodeErr} />
          <button type="submit" className="form__save-button" disabled={!isValid}>
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
