import './AboutMe.css';
import '../AboutProject/AboutProject.css';
import Photo from "../../images/pic__COLOR_pic.svg";

function AboutMe() {
  return (
    <section className='about-me' id="about-me">
      <h2 className='about-project__title'>Студент</h2>
      <div className='about-me__conteiner'>
        <div className='about-me__info'>
            <h2 className='about-me__name'>Виталий</h2>
            <h3 className='about-me__major'>Фронтенд-разработчик, 30 лет</h3>
            <p className='about-me__about'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a className='about-me__link' href='#'>Github</a>
        </div>
        <img src={Photo} alt="Фотография студента" className='about-me__photo' />
      </div>
    </section>
  );
}

export default AboutMe;
