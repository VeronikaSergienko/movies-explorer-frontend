import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const { pathname }  = useLocation();
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth); // ширина браузера
  const [numberOfCardsAtTheFirstMounting, setNumberOfCardsAtTheFirstMounting] = useState(0); //первоначальное количество карточек
  const [numberOfCardsDuringSubsequentMounting, setNumberOfCardsDuringSubsequentMounting] = useState(0); //сколько добавить при клике на кнопку
  const [theFinalArrayToMount, setTheFinalArrayToMount] = useState([]); // массив для монтирования
  const [isNoCards, setIsNoCards] = useState(false); //нет карт для монтирования

  // функция измерения окна браузера
  function browserWidthMeasurement() {
    setTimeout(() => {
      setBrowserWidth(window.innerWidth);
    }, 1000);
  }

  // устанавливаем слушатель для измерения ширины браузера, удаляем
  useEffect(() => {
    window.addEventListener("resize", browserWidthMeasurement);
    return () => {
      window.removeEventListener("resize", browserWidthMeasurement);
    };
  }, [browserWidth]);

    // устанавливаем количество первоначально подгружаемых карточек и далее при клике на кнопку
    useEffect(() => {
      if (browserWidth >= 1046) {
        setNumberOfCardsAtTheFirstMounting(16);
        setNumberOfCardsDuringSubsequentMounting(4);
      }  else if (browserWidth > 800 && browserWidth <= 1046) {
        setNumberOfCardsAtTheFirstMounting(12);
        setNumberOfCardsDuringSubsequentMounting(3);
      } else if (browserWidth > 568 && browserWidth <= 800) {
        setNumberOfCardsAtTheFirstMounting(8);
        setNumberOfCardsDuringSubsequentMounting(2);
      } else if (browserWidth <= 568) {
        setNumberOfCardsAtTheFirstMounting(5);
        setNumberOfCardsDuringSubsequentMounting(2);
      }
    }, [browserWidth, props.allMovies]);

    useEffect(() => {
      handleTheFirstMountingOfCards();
      setIsNoCards(props.allMovies.length < theFinalArrayToMount.length);
    }, [browserWidth, props.allMovies])

    function handleTheFirstMountingOfCards() {
      setTheFinalArrayToMount(props.allMovies.slice(0, numberOfCardsAtTheFirstMounting));
    }

    function handleButtonClickShowMore() {
      const moreCards = props.allMovies.length - theFinalArrayToMount.length;
  
      if (moreCards > 0) {
        const cards = props.allMovies.slice(theFinalArrayToMount.length, theFinalArrayToMount.length + numberOfCardsDuringSubsequentMounting);
        setTheFinalArrayToMount([...theFinalArrayToMount, ...cards]);
      } else {
        setIsNoCards(true);
      }

    }

  return (
    <section className="elements">
      {theFinalArrayToMount.length > 0 ? (
      <>
      <div className="elements-box">
        {theFinalArrayToMount.map((movie) => {
          const isSaved = props.userMovies.find(i => {return i.movieId === movie.id})
        return (
          <MoviesCard
            card={movie}
            key={movie.id}
            nameRU={movie.nameRU}
            duration={movie.duration}
            onCardLike={props.onCardLike}
            onDeleteMovie={props.onDeleteMovie}
            userMovies={props.userMovies}
            isSaved={isSaved}
          />
        );
      })}
      </div>
      {/* сохранённые фильмы? тогда ничего. иначе --- нет фильмов? тогда ничего. иначе кнопка ещё */}
      {pathname === "/saved-movies" ? "" : (
        isNoCards ? "" : <button className="elements__more-button" onClick={handleButtonClickShowMore}>Ещё</button>
      )}
      </>) : (
        <p>Ничего не найдено</p>
      )
    }
  </section>
  );
}

export default MoviesCardList;
