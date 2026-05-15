import { useState, useEffect } from "react";
import { useTheme } from "../theme.jsx";
import { Link, useNavigate } from "react-router";
import { useCart } from "../context/CartContext.jsx";

export default function CartDisplay() {
  const { theme } = useTheme();
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/product");
    }
  }, [cartItems, navigate]);
  return (
    <div
      style={{
        background: theme === "dark" ? "#1f2937" : "#ffffff",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/product">Shop now!</Link>
        </p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ marginBottom: "20px" }}>
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
