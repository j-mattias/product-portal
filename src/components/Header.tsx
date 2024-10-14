import { Link, NavLink } from "react-router-dom";
import { Cart, SearchForm } from ".";
import { useState } from "react";
import { useCartContext } from "../contexts";

export function Header() {
  const [showCart, setShowCart] = useState(false);
  const {cart} = useCartContext();
  const cartItemCount = cart.items.length;

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
          <SearchForm />
          <NavLink className="navbar__link" to="products">
            Products
          </NavLink>
          <NavLink className="navbar__link navbar__link--add" to="add-product">
            Add
          </NavLink>
          <button className="navbar__cart-btn" onClick={handleClick}>
            <i className="fa-solid fa-cart-shopping"></i>
            {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
          </button>
        </nav>
      </header>
      {showCart && <Cart handleClick={handleClick} />}
    </>
  );
}
