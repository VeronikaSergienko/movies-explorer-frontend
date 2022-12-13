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
      <section className='footer'>
        <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
        <div className="footer__conteiner">
            <p className="footer__copyright">&copy; 2022</p>
            <ul className="footer__links">
                <li>
                <a className="footer__link" href="#" target="blank">Яндекс.Практикум</a>
                </li>
                <li>
                <a className="footer__link" href="#" target="blank">Github</a>
                </li>
            </ul>
        </div>
    </section>
    </Route>

  );
}

export default Footer;
