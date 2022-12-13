import './NavTab.css';

function NavTab() {
  return (
    <section className='nav-tab'>
        <ul className="nav-tab__elements">
          <li className="nav-tab__element">
            <a className="nav-tab__link" href="#about-project">О проекте</a>
          </li>
          <li className="nav-tab__element">
            <a className="nav-tab__link" href="#techs">Технологии</a>
          </li>
          <li className="nav-tab__element">
            <a className="nav-tab__link" href="#about-me">Студент</a>
          </li>
      </ul>
    </section>
  );
}

export default NavTab;
