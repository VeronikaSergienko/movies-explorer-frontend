import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import './Profile.css';
import '../Login/Login.css';
import useFormWithValidation from "../../hook/useFormWithValidation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function Profile({ onProfile, onSignOut,  isErrorMessage, statusCodeErr }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setIsValid, setValues } = useFormWithValidation();

  useEffect(() => {
      setValues({
        userName: currentUser.name,
        email: currentUser.email
      })
  }, [currentUser])

  useEffect(() => {
    if(currentUser.name === values.userName && currentUser.email === values.email) {
      setIsValid(false);
    }
  }, [isValid, currentUser, values])

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.userName || !values.email) {
      return;
    }
    onProfile({
      name: values.userName,
      email: values.email,
    });
  }

  return (
      <div className="profile">
        <form className="profile-form" onSubmit={handleSubmit}>
          <h2 className="profile-form__title">{`Привет, ${currentUser.name}!`}</h2>
          <div className="profile-form__conteiner">
            <div className="profile-form__input-conteiner">
              <p className="profile-form__name-input">Имя</p>
              <input
                type="text"
                name="userName"
                placeholder={currentUser.name}
                value={values.userName}
                onChange={handleChange}
                className="profile-form__input"
                minLength="2"
                maxLength="30"
                required
              />
            </div>
            <span className="profile-form__input-error">{errors.userName || ""}</span>
          </div>
          <div className="profile-form__conteiner profile-form__conteiner_type-without-a-line">
            <div className="profile-form__input-conteiner">
            <p className="profile-form__name-input">E-mail</p>
              <input
                type="email"
                name="email"
                placeholder={currentUser.email}
                value={values.email}
                // pattern="https?:\/\/[\w/?.&-=]+$"
                onChange={handleChange}
                className="profile-form__input"
                minLength="2"
                maxLength="30"
                required
              />
            </div>
            <span className="profile-form__input-error">{errors.email || ""}</span>
          </div>
          <ErrorMessage isErrorMessage={isErrorMessage} statusCodeErr={statusCodeErr} />
          <button type="submit" className="profile-form__save-button" disabled={!isValid}>
            Редактировать
          </button>
        </form>
        <div className="profile-form__signin">
          <Link to="/sign-in" className="profile-form__login-link" onClick={onSignOut} >
            Выйти из аккаунта
          </Link>
        </div>
      </div>
  );
}

export default Profile;
