import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const array = [
    {
        duration: '1ч 47мин',
        image: "https://e-tex24.ru/wp-content/uploads/2021/12/b4fb6a4a7ecb2476f852a7fe37c43bc5.jpeg",
        _id: '63739f80f55210c9ab32a775',
        nameRU: '33 слова о дизайне',
        owner: '63739f56f55210c9ab32a772'
    },
    {
        duration: '1ч 47мин',
        image: "https://e-tex24.ru/wp-content/uploads/2021/12/b4fb6a4a7ecb2476f852a7fe37c43bc5.jpeg",
        _id: '63739f80f55210c9ab32a776',
        nameRU: '33 слова о дизайне',
        owner: '63739f56f55210c9ab32a772'
    },
    {
      duration: '1ч 47мин',
      image: "https://e-tex24.ru/wp-content/uploads/2021/12/b4fb6a4a7ecb2476f852a7fe37c43bc5.jpeg",
      _id: '63739f80f55210c9ab32a776',
      nameRU: '33 слова о дизайне',
      owner: '63739f56f55210c9ab32a772'
  },
  {
    duration: '1ч 47мин',
    image: "https://e-tex24.ru/wp-content/uploads/2021/12/b4fb6a4a7ecb2476f852a7fe37c43bc5.jpeg",
    _id: '63739f80f55210c9ab32a776',
    nameRU: '33 слова о дизайне',
    owner: '63739f56f55210c9ab32a772'
  },
  {
    duration: '1ч 47мин',
    image: "https://e-tex24.ru/wp-content/uploads/2021/12/b4fb6a4a7ecb2476f852a7fe37c43bc5.jpeg",
    _id: '63739f80f55210c9ab32a776',
    nameRU: '33 слова о дизайне',
    owner: '63739f56f55210c9ab32a772'
  }
];

function MoviesCardList(props) {
    const onCardClick = () => {
        console.log('onCardClick');
    }
    const onCardLike = () => {
        console.log('onCardLike');
    }
    const onCardDelete = () => {
        console.log('onCardDelete');
    }
  return (
    <section className="elements">
      <div className="elements-box">
        {array.map((movie) => {
        return (
          <MoviesCard
            card={movie}
            key={movie._id}
            image={movie.image}
            nameRU={movie.nameRU}
            duration={movie.duration}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        );
      })}
      </div>
      <button className="elements__more-button">Ещё</button>
  </section>
  );
}

export default MoviesCardList;
