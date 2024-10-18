import { Link, NavLink } from "react-router-dom";
import { Cart, CategoryMenu, SearchForm } from ".";
import { useState } from "react";
import { useCartContext } from "../contexts";
import { groupedCategories } from "../data";

export function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useCartContext();
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
          <div className="navbar__link-container">
            <input type="checkbox" id="hamburger-nav" />
            <label className="hamburger-open-icon" htmlFor="hamburger-nav">
              <i className="fa-solid fa-bars"></i>
            </label>

            <label id="hamburger-nav__overlay" htmlFor="hamburger-nav"></label>

            <div className="navbar__links-wrapper">
              <label className="hamburger-close-icon" htmlFor="hamburger-nav">
                <i className="fa-solid fa-x"></i>
              </label>
              <NavLink className="navbar__link" to="products">
                Products
              </NavLink>
              <NavLink className="navbar__link navbar__link--add" to="add-product">
                Add
              </NavLink>
              <CategoryMenu categoryGroups={groupedCategories} className="category-menu--header" />
            </div>
            <button className={`navbar__cart-btn ${cartItemCount > 0 ? "cart-has-items" : ""}`} onClick={handleClick}>
              <i className="fa-solid fa-cart-shopping"></i>
              {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
            </button>
          </div>
        </nav>
      </header>
      <Cart handleClick={handleClick} showCart={showCart} />
    </>
  );
}
