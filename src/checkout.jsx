import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "./context/CartContext.jsx";

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0 && !orderNumber) {
      navigate("/product");
    }
  }, [cartItems, navigate, orderNumber]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.address.trim() ||
      !formData.phone.trim()
    ) {
      setError("Please fill in all fields before confirming your order.");
      return;
    }

    setError("");
    setOrderNumber(`ORD${Math.floor(100000 + Math.random() * 900000)}`);
    clearCart();
    setTimeout(() => {
      navigate("/");
    }, 4500);
  };

  if (cartItems.length === 0 && !orderNumber) {
    return (
      <main className="checkout-page">
        <div className="checkout-panel">
          <h1>Your cart is empty</h1>
          <p>
            Pick a few favorites first, then come back here to complete your
            order.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/product")}
          >
            Browse products
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-panel">
        {!orderNumber ? (
          <>
            <h1>Checkout</h1>
            <p className="checkout-subtitle">
              Just a few details and your order will be confirmed.
            </p>

            <div className="checkout-summary">
              <h2>Order Summary</h2>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <span>{item.title}</span>
                    <strong>
                      {item.quantity} × ${item.price.toFixed(2)}
                    </strong>
                  </li>
                ))}
              </ul>
              <div className="checkout-total">
                Total: ${cartTotal.toFixed(2)}
              </div>
            </div>

            <form className="checkout-form" onSubmit={handleSubmit}>
              <label>
                Full Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>
              <label>
                Email Address
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label>
                Delivery Address
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street, city, postal code"
                  rows="3"
                  required
                />
              </label>
              <label>
                Phone Number
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="123-456-7890"
                  required
                />
              </label>

              {error && <div className="form-error">{error}</div>}

              <button type="submit" className="btn btn-primary checkout-submit">
                Confirm Order
              </button>
            </form>
          </>
        ) : (
          <div className="order-confirmation">
            <h1>Order Confirmed!</h1>
            <p>
              Thanks, {formData.name}! Your order <strong>{orderNumber}</strong>{" "}
              is on its way.
            </p>
            <p>You will be redirected to the home page shortly.</p>
            <button className="btn btn-secondary" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
