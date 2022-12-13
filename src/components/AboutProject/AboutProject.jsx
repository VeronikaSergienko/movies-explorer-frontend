import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id="about-project">
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__info'>
        <div className='about-project__conteiner-text'>
            <p className='about-project__text-title'>Дипломный проект включал 5 этапов</p>
            <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__conteiner-text'>
            <p className='about-project__text-title'>На выполнение диплома ушло 5 недель</p>
            <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__conteiner-schema'>
        <div>
            <p className='about-project__back-end'>1 неделя</p>
            <p className='about-project__back-end about-project__text-not-background'>Back-end</p>
        </div>
        <div>
            <p className='about-project__front-end'>4 недели</p>
            <p className='about-project__front-end about-project__text-not-background'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;