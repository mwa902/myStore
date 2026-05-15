import { Link } from "react-router";
import Navbar from "./navbar.jsx";
import { useTheme } from "../theme.jsx";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { cartCount } = useCart();
  const { currentUser, logout } = useAuth();

  return (
    <header className={`app-header ${theme}`}>
      <div className="header-top">
        <Link to="/" className="brand-logo">
          <img
            src="https://res.cloudinary.com/dbvntcraw/image/upload/v1778846336/images_dhdgcl.png"
            alt="MyStore Logo"
            className="logo-image"
          />
        </Link>
        <div className="brand-text">
          <h1>MyStore</h1>
          <p className="tagline">A warm and friendly shop for every day.</p>
        </div>
      </div>

      <Navbar
        navs={["Home", "About", "Contact", "Cart", "Login"]}
        cartCount={cartCount}
        currentUser={currentUser}
        onLogout={logout}
      />

      <div className="theme-toggle-wrapper">
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? "Night mode" : "Cozy light"}
        </button>
      </div>
    </header>
  );
}
