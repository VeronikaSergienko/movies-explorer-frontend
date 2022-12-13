import React from "react";
import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
    </>
  );
}

export default SavedMovies;
