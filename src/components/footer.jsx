export default function Footer() {
  return (
    <footer>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div>
            <h3>My Store</h3>
            <p>
              All of our products are made with the highest quality materials
              and the best craftsmanship. Shop with confidence!
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Follow Us</h3>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="https://www.facebook.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                📘 Facebook
              </a>
              <a
                href="https://www.twitter.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                🐦 Twitter
              </a>
              <a
                href="https://www.instagram.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                📷 Instagram
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            borderTop: "1px solid #555",
            paddingTop: "1rem",
          }}
        >
          <p>&copy; 2024 MyStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
