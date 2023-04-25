import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
        <h3 className='portfolio__title'>Портфолио</h3>
        <ul className="portfolio__links">
            <li className="portfolio__link-conteiner">
              <a className="portfolio__link" href="https://veronikasergienko.github.io/russian-travel/index.html" target="blank">Статичный сайт</a>
              <a className="portfolio__link portfolio__link-arrow" href="https://veronikasergienko.github.io/russian-travel/index.html" target="blank"></a>
            </li>
            <li className="portfolio__link-conteiner">
              <a className="portfolio__link" href="https://veronikasergienko.github.io/mesto/index.html" target="blank">Адаптивный сайт</a>
              <a className="portfolio__link portfolio__link-arrow" href="https://veronikasergienko.github.io/mesto/index.html" target="blank"></a>
            </li>
            <li className="portfolio__link-conteiner">
              <a className="portfolio__link" href="https://vss.students.mesto.nomoredomains.monster/" target="blank">Одностраничное приложение</a>
              <a className="portfolio__link portfolio__link-arrow" href="https://vss.students.mesto.nomoredomains.monster/" target="blank"></a>
            </li>
          </ul>
    </section>
  );
}

export default Portfolio;
