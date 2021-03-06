import './Header.scss';

export function Header() {
  return (
    <>
      <header className="header">

      <section className="header__logo" role="navigation">
        <a className="header__link" href="#home_page">
            <div className="header__logo-part1" />
            <div className="header__logo-part2" />
        </a>
        
        <h1 className="header__title">Email Templater</h1>
      </section>

      </header>
    </>
  );
}
