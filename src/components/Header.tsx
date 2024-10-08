import { Link, NavLink } from "react-router-dom";
import { Cart } from ".";
import { useState } from "react";

export function Header() {
  const [showCart, setShowCart] = useState(false);

  const handleClick = () => {
    setShowCart((s) => !s);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar max-width">
          <Link className="navbar__link navbar__link--title" to="/">
            Figment
          </Link>
          <NavLink className="navbar__link" to="/">
            Home
          </NavLink>
          <NavLink className="navbar__link" to="products">
            Products
          </NavLink>
          <NavLink className="navbar__link navbar__link--add" to="add-product">
            Add
          </NavLink>
          <button className="navbar__cart-btn" onClick={handleClick}>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </nav>
      </header>
      {showCart && <Cart handleClick={handleClick} />}
    </>
  );
}
