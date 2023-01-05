import React from "react";
import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {
  // console.log(props.allMovies);
  return (
    <>
      <SearchForm onSearch={props.onSearch}/>
      <MoviesCardList allMovies={props.allMovies} userMovies={props.userMovies} onCardLike={props.onCardLike} onDeleteMovie={props.onDeleteMovie}/>
    </>
  );
}

export default SavedMovies;
