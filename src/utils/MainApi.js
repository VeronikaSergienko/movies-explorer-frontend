const { NODE_ENV } = process.env;
const BASE_URL = NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://api.movies.vss.nomoredomains.icu/';

class MainApi {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
    //   console.log(res);
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  _getToken() {
    return JSON.parse(localStorage.getItem('jwt'));
  };

// возвращает информацию о пользователе
  getUserInfoApi() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${this._getToken()}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

//   возвращает данные о сохраненных фильмах
  getInitialMoviesApi() {
    return fetch(`${this._url}movies`, {
      headers: {
        "Authorization": `Bearer ${this._getToken()}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

//   обновляет информацию о пользователе
  patchUserInfo({ name, email }) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${this._getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._checkResponse);
  }

//   запрос на удаление фильма
  deleteSavedMovie(movie) {
    return fetch(`${this._url}movies/${movie._id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${this._getToken()}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  postMovie(item) {
    return fetch(`${this._url}movies`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this._getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then(this._checkResponse);
  }

  register({ name, password, email }) {
    return fetch(`${this._url}signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, password, email }),
    }).then(this._checkResponse);
  }

  authorize({ password, email }) {
    return fetch(`${this._url}signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ password, email }),
    }).then(this._checkResponse);
  }

  getContent(token) {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
    } 
    }).then(this._checkResponse);
  }

}

export const mainApi = new MainApi({
//   baseUrl: 'https://api.movies.vss.nomoredomains.icu/',
  baseUrl: 'http://localhost:4000/',
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;