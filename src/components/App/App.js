import { React, useEffect, useState } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import './App.css';
import Header from '../Header/Header';
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState(false); // есть сообщение об ошибке?
  const [statusCodeErr, setStatusCodeErr] = useState();
  
  const history = useHistory();
  const location = useLocation();
  const locationPageMovies = location.pathname === '/movies';

  const auth = async (jwt) => {
    mainApi
      .getContent(jwt)
      .then((res) => {
        if (res.email) {
          // console.log(res);
          setLoggedIn(true);
          setCurrentUser(res);
          // history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    let jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth(JSON.parse(jwt));
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserInfoApi(), mainApi.getInitialMoviesApi(), moviesApi.getInitialMoviesApi()])
        .then(([profile, userFilms, films]) => {
          setCurrentUser(profile);
          setUserMovies(userFilms);
          setAllMovies(films);
        })
      // history.push("/");
    }
  }, [loggedIn, locationPageMovies]);


  // вход пользователя 
  const handleLogin = ({ email, password }) => {
    mainApi
    .authorize({ email, password })
    .then((res) => {
      localStorage.setItem("jwt", JSON.stringify(res.token));
      setLoggedIn(true);
      auth(res.token);
      history.push("/movies");
    })
    .catch((err) => {
      setIsErrorMessage(true);
      const statusCode = Number(err.slice(6));
      setStatusCodeErr(statusCode);
      console.log(err, statusCode);
    });
  };

  // регистрация на сайте
  const handleRegistration = ({ name, email, password }) => {
    console.log({ name, email, password });
    mainApi
    .register({ name, email, password })
    .then((res) => {
      if (res) {
        console.log(res);
        history.push("/sign-in");
      }
    })
    .catch((err) => {
      console.log(err);
      setIsErrorMessage(true);
      const statusCode = Number(err.slice(6));
      setStatusCodeErr(statusCode);
    });
  };

  // обновление данных профиля
  const handleProfile = ({ name, email }) => {
    console.log({ name, email });
    mainApi
    .patchUserInfo({ name, email })
    .then((res) => {
      if (res) {
        setCurrentUser(res);
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
      setIsErrorMessage(true);
      const statusCode = Number(err.slice(6));
      setStatusCodeErr(statusCode);
    });
  };

  // выход из аккаунта
  const handleSignOut = () => {
    setCurrentUser({});
    setLoggedIn(false);
    setAllMovies([]);
    localStorage.removeItem("jwt");
  };

    // удаление фильма из сохранённых фильмов юзера
    const handleMovieDelete = (movie) => {
      // console.log(movie);
      mainApi
        .deleteSavedMovie(movie)
        .then((res) => {
          setUserMovies((userMovies) => 
            userMovies.filter((m) => !(m.movieId === movie.movieId))
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };

  // сохранение фильма в сохранённые фильмы юзера
  const handleMovieSave = (movie) => {
    console.log(movie);
    mainApi
      .postMovie(movie)
      .then((savedMovie) => {
        setUserMovies([...userMovies, savedMovie]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // обработка клика по поиску фильмов
  const handleSearchMovies = ({ requestText, isShortFilms }) => {
    setIsLoading(true);
    localStorage.setItem("searchValue", JSON.stringify(requestText));
    localStorage.setItem("isActiveCheckbox", JSON.stringify(isShortFilms));
    if (allMovies.length === 0) {
      moviesApi.getInitialMoviesApi()
      .then((films) => {
        setAllMovies(films);
        const foundMovies = allMovies.filter((m) => {
          const nameMovies = String(m.nameRU.toLowerCase());
          return nameMovies.includes(requestText.toLowerCase());
        })
        const shotMovies = foundMovies.filter((m) => {
          return m.duration < 40
        })
        const finalMovies = (isShortFilms) ? shotMovies : foundMovies;
        setFiltredMovies(finalMovies);
        setIsLoading(false);
      })

    } else {
      const foundMovies = allMovies.filter((m) => {
        const nameMovies = String(m.nameRU.toLowerCase());
        return nameMovies.includes(requestText.toLowerCase());
      })
      const shotMovies = foundMovies.filter((m) => {
        return m.duration < 40
      })
      const finalMovies = (isShortFilms) ? shotMovies : foundMovies;
      setFiltredMovies(finalMovies);
      setIsLoading(false);
    }
  };


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn}/>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/sign-in">
            <Login onLogin={handleLogin} isErrorMessage={isErrorMessage} statusCodeErr={statusCodeErr} />
          </Route>
          <Route exact path="/sign-up">
            <Register onRegister={handleRegistration} isErrorMessage={isErrorMessage} statusCodeErr={statusCodeErr}/>
          </Route>
          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onProfile={handleProfile}
            onSignOut={handleSignOut}
            isErrorMessage={isErrorMessage}
            statusCodeErr={statusCodeErr}
          />
          <ProtectedRoute
            exact
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            allMovies={filtredMovies}
            userMovies={userMovies}
            onCardLike={handleMovieSave}
            onSearch={handleSearchMovies}
            isLoading={isLoading}
            onDeleteMovie={handleMovieDelete}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            allMovies={userMovies}
            userMovies={userMovies}
            onDeleteMovie={handleMovieDelete}
          />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
