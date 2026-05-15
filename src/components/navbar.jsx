import { Link } from "react-router";

export default function Navbar({ navs, cartCount, currentUser, onLogout }) {
  return (
    <nav>
      <ul>
        {navs.some((nav) => nav === "Home") && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        {navs.some((nav) => nav === "About") && (
          <li>
            <Link to="/about">About</Link>
          </li>
        )}
        {navs.some((nav) => nav === "Contact") && (
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        )}
        {navs.some((nav) => nav === "Cart") && (
          <li>
            <Link to="/cart">🛒 Cart{cartCount ? ` (${cartCount})` : ""}</Link>
          </li>
        )}
        {navs.some((nav) => nav === "Login") && (
          <li>
            {currentUser ? (
              <button className="nav-logout-btn" onClick={onLogout}>
                Logout
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}
