import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
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
      </nav>
    </header>
  );
}
