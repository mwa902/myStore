import { Link } from "react-router";

export default function PageNull() {
  return (
    <main className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-icon">🔍</div>
        <h1 className="not-found-title">Oops! Page Not Found</h1>
        <p className="not-found-subtitle">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/product" className="btn btn-secondary">
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}
