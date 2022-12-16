import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import './MoviesCard.css';

function MoviesCard(props) {
  const currentUser = React.useContext(CurrentUserContext);
//   const isSaved = props.movie.saved.some((i) => i._id === currentUser._id);
    const isSaved = false;
  const movieSaveButtonClassName = `element__save-button ${
    isSaved ? "element__save-button_active" : ""
  }`;

  function handleClick() {
    props.onMovieClick(props.movie);
  }

  const handleSaveClick = () => {
    props.onCardLike(props.movie);
  };

  return (
    <article className="element" id="element">
      <img
        className="element__image"
        src={`${props.image}`}
        onClick={() => handleClick()}
        alt={`${props.nameRU}`}
      />
      <div className="element__info-conteiner">
        <div className="element__text-conteiner">
          <h2 className="element__text">{props.nameRU}</h2>
          <button
            type="button"
            className={movieSaveButtonClassName}
            onClick={() => handleSaveClick()}
          ></button>
        </div>
        <p className="element__duration">{props.duration}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
