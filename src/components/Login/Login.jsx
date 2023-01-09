import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import './Login.css';
import '../Header/Header.css';
import useFormWithValidation from "../../hook/useFormWithValidation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function Login({ onLogin, isErrorMessage, statusCodeErr }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm(
      {
        email: "",
        password: "",
      },
      {},
      false
    );
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    onLogin({
      email: values.email,
      password: values.password,
    });
  }
  return (
    <div className="login">
      <div className="login__box">
        <Link to="/" className="header__logo"></Link>
        <h2 className="form__title">Рады видеть!</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__input-conteiner">
            <p className="form__input-name">E-mail</p>
            <input
              type="email"
              name="email"
              value={values.email || ""}
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
            Войти
          </button>
        </form>
        <div className="form__signin">
          <p className="form__text">Ещё не зарегистрированы? </p>
          <Link to="/sign-up" className="form__login-link">
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
