import React, { useState } from "react";
import './SearchForm.css';

function SearchForm({ onSearch }) {
    const [movieName, setMovieName] = useState("");
    const [isShortFilms, setIsShortFilms] = useState(false);
  
    function handleChangeMovieName(e) {
        setMovieName(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      onSearch({
        movieName,
      });
    }

    function toggleCheckbox() {
      setIsShortFilms(!isShortFilms);
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
                    value={movieName}
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
