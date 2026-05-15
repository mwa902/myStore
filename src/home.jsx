import { Link } from "react-router";

export default function Home() {
  return (
    <main>
      <div className="home-hero">
        <h1>Welcome to MyStore</h1>
        <p>Discover warm, joyful shopping with friendly service.</p>
        <Link
          to="/product"
          className="btn btn-primary"
          style={{ marginTop: "2rem", display: "inline-block" }}
        >
          Shop Now
        </Link>
      </div>

      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Featured Categories</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            marginTop: "2rem",
          }}
        >
          <div className="feature-card">
            <h3>Electronics</h3>
            <p>Latest gadgets and smart finds</p>
          </div>
          <div className="feature-card">
            <h3>Fashion</h3>
            <p>Trendy clothing and everyday styles</p>
          </div>
          <div className="feature-card">
            <h3>Home & Garden</h3>
            <p>Cozy essentials and beautiful decor</p>
          </div>
        </div>
      </div>
    </main>
  );
}
