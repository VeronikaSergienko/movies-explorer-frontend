import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
        <h3 className='portfolio__title'>Портфолио</h3>
        <ul className="portfolio__links">
            <li className="portfolio__link-conteiner">
              <a className="portfolio__link" href="#" target="blank">Статичный сайт</a>
              <a className="portfolio__link portfolio__link-arrow" href="#" target="blank"></a>
            </li>
            <li className="portfolio__link-conteiner">
              <a className="portfolio__link" href="#" target="blank">Адаптивный сайт</a>
              <a className="portfolio__link portfolio__link-arrow" href="#" target="blank"></a>
            </li>
            <li className="portfolio__link-conteiner">
              <a className="portfolio__link" href="#" target="blank">Одностраничное приложение</a>
              <a className="portfolio__link portfolio__link-arrow" href="#" target="blank"></a>
            </li>
          </ul>
    </section>
  );
}

export default Portfolio;
