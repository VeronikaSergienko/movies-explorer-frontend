import React from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
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

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const handleLogin = () => {
    console.log('handleLogin');
  };

  const handleRegistration = () => {
    console.log('handleRegistration');
  };

  const handleProfile = () => {
    console.log('handleProfile');
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={true}/>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/sign-in">
            <Login onLogin={handleLogin} />
          </Route>
          <Route exact path="/sign-up">
            <Register onRegister={handleRegistration} />
          </Route>
          <Route exact path="/profile">
            <Profile onRegister={handleProfile} />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies />
          </Route>
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
