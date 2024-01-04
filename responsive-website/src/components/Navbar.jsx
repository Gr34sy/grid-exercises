import { useState } from "react";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="nav">
      <button onClick={() => setShowMenu((prevState) => !prevState)} className="nav__button">
        Menu
      </button>

      {showMenu && <ul className="nav__menu">
        <li className="menu__item">
          <a href="/">Tacos</a>
        </li>
        <li className="menu__item">
          <a href="/">Beers</a>
        </li>
        <li className="menu__item">
          <a href="/">Wines</a>
        </li>
        <li className="menu__item">
          <a href="/">Desserts</a>
        </li>
        <li className="menu__item">
          <a href="/">Reservations</a>
        </li>
      </ul>}
    </nav>
  );
}
