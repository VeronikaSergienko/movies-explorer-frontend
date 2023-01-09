import React from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';


function Movies(props) {
  return (
    <>
      <SearchForm onSearch={props.onSearch} />
      {props.isLoading ? <Preloader /> : 
            (<MoviesCardList 
            allMovies={props.allMovies} 
            userMovies={props.userMovies} 
            onCardLike={props.onCardLike} 
            onDeleteMovie={props.onDeleteMovie}/>)
            }
    </>
  );
}

export default Movies;
