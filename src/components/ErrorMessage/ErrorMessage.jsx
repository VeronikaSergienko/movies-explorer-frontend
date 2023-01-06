import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ErrorMessage.css';

function ErrorMessage(props) {
  const { pathname }  = useLocation();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    handleErrorMessage();
  }, [props.statusCodeErr, props.isErrorMessage]);


  function handleErrorMessage() {
    const statusCode = props.statusCodeErr;
    if (pathname === '/sign-up') {
      if (statusCode === 400) {
        setErrorMessage("При регистрации пользователя произошла ошибка.")
      } else if (statusCode === 401) {
        setErrorMessage("Передан неверный логин или пароль");
      } else if (statusCode === 409) {
        setErrorMessage("Пользователь с таким email уже существует")
      } else if (statusCode === 500) {
        setErrorMessage("На сервере произошла ошибка.")
      } else {
        setErrorMessage("Ошибка")
      }
    } else if (pathname === '/sign-in') {
      if (statusCode === 400) {
        setErrorMessage("При авторизации пользователя произошла ошибка.")
      } else if (statusCode === 401) {
        setErrorMessage("Передан неверный логин или пароль");
      } else if (statusCode === 500) {
        setErrorMessage("На сервере произошла ошибка.")
      } else {
        setErrorMessage()
      }
    } else if (pathname === '/profile') {
      if (statusCode === 400) {
        setErrorMessage("При обновлении профиля произошла ошибка.")
      } else if (statusCode === 409) {
        setErrorMessage("Пользователь с таким email уже существует")
      } else if (statusCode === 500) {
        setErrorMessage("На сервере произошла ошибка.")
      } else {
        setErrorMessage("Ошибка")
      }
    }
  }

  return (
    <>
      <p className="error-message">{props.isErrorMessage ? errorMessage : ""}</p>
    </>
  )
}

export default ErrorMessage;
