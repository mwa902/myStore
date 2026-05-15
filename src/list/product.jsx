import { useEffect, useState } from "react";
import Filter from "./filter.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const { cartItems, addToCart } = useCart();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const result = await fetch("https://dummyjson.com/products");
      const data = await result.json();
      setProducts(data.products);
      setFilteredProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage(`Added "${product.title}" to your cart.`);
    setTimeout(() => setMessage(""), 2500);
  };

  return (
    <main className="product-page">
      <h1>Our Products</h1>

      <div className="filter-container">
        <Filter products={products} setFilteredProducts={setFilteredProducts} />
      </div>

      {message && <div className="success-banner">{message}</div>}

      {loading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <ul className="product-grid">
          {filteredProducts.map((product) => {
            const alreadyInCart = cartItems.some(
              (item) => item.id === product.id,
            );
            return (
              <li key={product.id} className="product-card">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-info">
                  <h2 className="product-title">{product.title}</h2>
                  <p className="product-description">{product.description}</p>
                  <div className="product-meta">
                    <span>Brand: {product.brand}</span>
                    <span>Category: {product.category}</span>
                  </div>
                  <div className="product-details">
                    <span className="product-price">${product.price}</span>
                    <div className="product-rating">
                      <span>⭐</span>
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <div className="product-actions">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)}
                      disabled={alreadyInCart}
                    >
                      {alreadyInCart ? "In Cart" : "Add to Cart"}
                    </button>
                    <button className="btn btn-secondary">View Details</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {!loading && filteredProducts.length === 0 && (
        <div className="empty-state">
          <h2>No products found</h2>
          <p>Try adjusting your search criteria.</p>
        </div>
      )}
    </main>
  );
}
