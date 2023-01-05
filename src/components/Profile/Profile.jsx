import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import './Profile.css';
import '../Login/Login.css';

function Profile({ onProfile, onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  function handleChangeName(e) {
    setUserName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onProfile({
      name: userName,
      email,
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
                placeholder={currentUser.name}
                value={userName}
                onChange={handleChangeName}
                className="profile-form__input"
                minLength="2"
                maxLength="30"
                required
              />
            </div>
            <span className="profile-form__input-error"></span>
          </div>
          <div className="profile-form__conteiner profile-form__conteiner_type-without-a-line">
            <div className="profile-form__input-conteiner">
            <p className="profile-form__name-input">E-mail</p>
              <input
                type="e-mail"
                placeholder={currentUser.email}
                value={email}
                // pattern="https?:\/\/[\w/?.&-=]+$"
                onChange={handleChangeEmail}
                className="profile-form__input"
                minLength="2"
                maxLength="30"
                required
              />
            </div>
            <span className="profile-form__input-error"></span>
          </div>
          <button type="submit" className="profile-form__save-button">
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
