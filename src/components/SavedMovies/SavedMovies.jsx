import React from "react";
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {
  return (
    <>
      <SearchForm onSearch={props.onSearch}/>
      <MoviesCardList allMovies={props.allMovies} userMovies={props.userMovies} onCardLike={props.onCardLike} onDeleteMovie={props.onDeleteMovie}/>
    </>
  );
}

export default SavedMovies;
