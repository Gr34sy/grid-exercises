export function Header() {
  return (
    <header className="header">
      <section className="header__hero">
        <h1 className="hero__h1">Terry's Taco joint</h1>

        <p className="hero__p">Pretty good tacos!</p>
      </section>

      <div className="header__price-tag">
        <p className="price-tag__number">$1.99</p>
        <p className="price-tag__name">Tacos</p>
      </div>

      <div className="header__price-tag">
        <p className="price-tag__number">$3.99</p>
        <p className="price-tag__name">Kombucha</p>
      </div>
    </header>
  );
}
