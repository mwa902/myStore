import { Link } from "react-router";

export default function About() {
  return (
    <main className="about-page">
      <div className="about-hero">
        <h1>About MyStore</h1>
        <p>Your trusted partner in quality shopping</p>
      </div>

      <div className="about-content">
        <h2>Our Story</h2>
        <p>
          Founded with a passion for quality and customer satisfaction, MyStore
          has been serving customers with exceptional products for over a
          decade. We believe that shopping should be an enjoyable experience,
          not a stressful one.
        </p>
        <p>
          Our carefully curated selection of products spans across electronics,
          fashion, home goods, and more. Each item in our store is chosen for
          its quality, value, and ability to enhance your lifestyle.
        </p>
        <p>
          What sets us apart is our commitment to customer service. Our
          knowledgeable team is always ready to help you find exactly what
          you're looking for, and our hassle-free return policy ensures your
          satisfaction is guaranteed.
        </p>
      </div>

      <div className="about-content">
        <h2>Why Choose Us?</h2>
        <p>
          <strong>Quality Assurance:</strong> Every product undergoes rigorous
          quality checks before reaching our shelves.
        </p>
        <p>
          <strong>Competitive Pricing:</strong> We offer the best value for your
          money with regular promotions and discounts.
        </p>
        <p>
          <strong>Fast Shipping:</strong> Quick and reliable delivery to get
          your orders to you as soon as possible.
        </p>
        <p>
          <strong>Expert Support:</strong> Our customer service team is
          available to assist you with any questions or concerns.
        </p>
      </div>

      <div className="about-stats">
        <div className="stat-card">
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-card">
          <h3>500+</h3>
          <p>Quality Products</p>
        </div>
        <div className="stat-card">
          <h3>5★</h3>
          <p>Average Rating</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>
      </div>

      <div className="about-content" style={{ textAlign: "center" }}>
        <h2>Ready to Shop?</h2>
        <p>
          Explore our wide range of products and find something you'll love.
        </p>
        <Link
          to="/product"
          className="btn btn-primary"
          style={{ marginTop: "1rem", display: "inline-block" }}
        >
          Browse Products
        </Link>
      </div>
    </main>
  );
}
