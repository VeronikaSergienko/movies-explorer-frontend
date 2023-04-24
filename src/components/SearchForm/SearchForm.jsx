import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './SearchForm.css';

function SearchForm({ onSearch }) {
    const { pathname }  = useLocation();
    const isAllMovies = (pathname === "/movies");
    const [requestText, setRequestText] = useState("");
    const infoIsShotFilms = isAllMovies ? JSON.parse(localStorage.getItem("isActiveCheckbox")) : false;

    const [isShortFilms, setIsShortFilms] = useState(infoIsShotFilms);

    useEffect(() => {
      // console.log(JSON.parse(localStorage.getItem("isActiveCheckbox")), isShortFilms);
      if (isAllMovies && localStorage.getItem("isActiveCheckbox") && localStorage.getItem("searchValue")) {
        const savedSearchValue = JSON.parse(localStorage.getItem("searchValue"));
        const savedIsActiveCheckbox = JSON.parse(localStorage.getItem("isActiveCheckbox"));
        setRequestText(savedSearchValue);
        setIsShortFilms(savedIsActiveCheckbox);
      }
    }, [])
  
    function handleChangeMovieName(e) {
      setRequestText(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      onSearch({
        requestText,
        isShortFilms,
      });
    }

    function handleSubmitCheckbox() {
      onSearch({ requestText, isShortFilms });
    }

    function toggleCheckbox() {
      const newValue = !isShortFilms;
      console.log(newValue)
      localStorage.setItem("isActiveCheckbox", JSON.stringify(!isShortFilms));
      setIsShortFilms(newValue);
      console.log(isShortFilms)
      handleSubmitCheckbox();
    };
    
  return (
    <div className="search">
      <div className="search-box" >
        <div className="search__conteiner-form">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="search-form__input-conteiner">
                    <input
                    type="text"
                    placeholder="Фильм"
                    value={requestText}
                    onChange={handleChangeMovieName}
                    className="search-form__input"
                    minLength="2"
                    maxLength="30"
                    required
                    />
                    <span className="search-form__input-error"></span>
                </div>
                <button type="submit" className="search-form__send-button"></button>
            </form>
        </div>
        <div className="search__conteiner-checkbox">
          <p className="search__checkbox-name">Короткометражки</p>
          <button className={`search__checkbox-smalltumb ${isShortFilms ? "" : "search__checkbox-smalltumb_type_off"}`} onClick={toggleCheckbox} ></button>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
