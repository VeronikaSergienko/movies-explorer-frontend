import { Route } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const pathname = [
    "/",
    "/movies",
    "/saved-movies",
  ];
  return (
    <Route exact path={pathname}>
      <footer className='footer'>
        <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
        <div className="footer__conteiner">
            <p className="footer__copyright">&copy; 2022</p>
            <ul className="footer__links">
                <li>
                <a className="footer__link" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a>
                </li>
                <li>
                <a className="footer__link" href="https://github.com/VeronikaSergienko" target="blank">Github</a>
                </li>
            </ul>
        </div>
    </footer>
    </Route>

  );
}

export default Footer;
