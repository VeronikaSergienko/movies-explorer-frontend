class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      // console.log(res);
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getInitialMoviesApi() {
    return fetch(`${this._url}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;