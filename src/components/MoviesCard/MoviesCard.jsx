import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css';

function MoviesCard(props) {
  const durationOfTheFilmInHours = Math.floor(props.duration/60);
  const durationOfTheFilm = `${durationOfTheFilmInHours}ч ${props.duration-(durationOfTheFilmInHours*60)}м`;

    const { pathname }  = useLocation();
    const movieSaveButtonClassName = `element__save-button ${
      props.isSaved ? "element__save-button_active" : ""
    }`;

  const handleSaveClick = () => {
    // console.log(props.key, props.card.id)
    props.onCardLike({
      country: props.card.country,
      director: props.card.director,
      duration: props.card.duration,
      year: props.card.year,
      description: props.card.description,
      image: `https://api.nomoreparties.co/${props.card.image.url}`,
      trailerLink: props.card.trailerLink,
      // thumbnail: `https://api.nomoreparties.co/${props.card.image.formats.thumbnail.url}`,
      thumbnail: `https://api.nomoreparties.co/${props.card.image.url}`,
      movieId: props.card.id,
      nameRU: props.nameRU,
      nameEN: props.card.nameEN,
      key: props.key,
    });
  };

  const handleDeleteClick = () => {
    const isLocationSavedMovies = pathname === "/saved-movies";
    console.log(isLocationSavedMovies);
    if (isLocationSavedMovies) {
      console.log(props.card);
      props.onDeleteMovie(props.card);
    } else {
      const movie = props.userMovies.find(i => {return i.movieId === props.card.id});
      console.log(movie);
      props.onDeleteMovie(props.card);
    }
    // props.onDeleteMovie(props.card);
  };

  return (
    <article className="element" id="element">
      <a className="element__link" href={props.card.trailerLink} target="blank">
        <img
          className="element__image"
          src={pathname === "/saved-movies" ? props.card.image : `https://api.nomoreparties.co/${props.card.image.url}`}
          alt={`${props.nameRU}`}
        />
      </a>
      <div className="element__info-conteiner">
        <div className="element__text-conteiner">
          <h2 className="element__text">{props.nameRU}</h2>
          {pathname === "/saved-movies" ? (
                      <button
                      type="button"
                      className="element__save-button element__save-button_delete_my_movies"
                      onClick={() => handleDeleteClick()}
                    ></button>
          ) : (
            <button
            type="button"
            className={movieSaveButtonClassName}
            // onClick={() => handleSaveClick()}
            onClick={props.isSaved ? handleDeleteClick : handleSaveClick}
          ></button>
          )}
        </div>
        <p className="element__duration">{durationOfTheFilm}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
