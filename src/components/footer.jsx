export default function Footer() {
  return (
    <footer>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div>
            <h3>MyStore</h3>
            <p>
              All of our products are made with the highest quality materials
              and the best craftsmanship. Shop with confidence!
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="/">Home</a></li>
              <li><a href="/product">Products</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3>Follow Us</h3>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="https://www.facebook.com">📘 Facebook</a>
              <a href="https://www.twitter.com">🐦 Twitter</a>
              <a href="https://www.instagram.com">📷 Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 MyStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
