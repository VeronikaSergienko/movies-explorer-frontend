import './AboutMe.css';
import '../AboutProject/AboutProject.css';
import Photo from "../../images/pic__COLOR_pic.svg";

function AboutMe() {
  return (
    <section className='about-me' id="about-me">
      <h2 className='about-project__title'>Студент</h2>
      <div className='about-me__conteiner'>
        <div className='about-me__info'>
            <h2 className='about-me__name'>Вероника</h2>
            <h3 className='about-me__major'>Фронтенд-разработчик, 31 год</h3>
            <p className='about-me__about'>Я родилась и живу в Омске, закончила факультет экономики ОМГАУ им.Столыпина. У меня есть муж и две дочери. Я люблю слушать музыку, готовить. Недавно начала кодить. После того, как пройду курс по веб-разработки, начну заниматься фриланс-заказами и искать работу.</p>
            <a className='about-me__link' href='https://github.com/VeronikaSergienko' target="blank" >Github</a>
        </div>
        <img src={Photo} alt="Фотография студента" className='about-me__photo' />
      </div>
    </section>
  );
}

export default AboutMe;
