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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0 && !orderNumber) {
      navigate("/product");
    }
  }, [cartItems, navigate, orderNumber]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.address.trim() ||
      !formData.phone.trim()
    ) {
      setError("Please fill in all fields before confirming your order.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setError("");
      setOrderNumber(`ORD${Math.floor(100000 + Math.random() * 900000)}`);
      clearCart();
      setIsSubmitting(false);
      setTimeout(() => navigate("/"), 4500);
    }, 800);
  };

  if (cartItems.length === 0 && !orderNumber) {
    return (
      <main className="checkout-page">
        <div className="checkout-panel" style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1.25rem", animation: "float 3s ease-in-out infinite", display: "block" }}>🛒</div>
          <h1>Your cart is empty</h1>
          <p className="checkout-subtitle">Pick a few favorites first, then come back to complete your order.</p>
          <button className="btn btn-primary" onClick={() => navigate("/product")}>
            Browse Products
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
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <span style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #9b3fc5, #e8407a)",
                color: "#fff",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.4rem 1.1rem",
                borderRadius: "999px",
                marginBottom: "0.9rem",
                boxShadow: "0 6px 18px rgba(108,63,197,0.3)",
              }}>
                🛍️ Secure Checkout
              </span>
              <h1 style={{ marginBottom: "0.5rem" }}>Complete Your Order</h1>
              <p className="checkout-subtitle">You're just a few steps away from getting your items delivered.</p>
            </div>

            {/* Two-column layout */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "2rem", alignItems: "start" }}>

              {/* Order Summary */}
              <div className="checkout-summary" style={{ margin: 0 }}>
                <h2>📦 Order Summary</h2>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flex: 1 }}>
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          style={{ width: 48, height: 48, objectFit: "cover", borderRadius: 10, border: "1.5px solid var(--border)", background: "var(--lavender)", flexShrink: 0 }}
                          onError={(e) => { e.target.src = "https://via.placeholder.com/48"; }}
                        />
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--text-dark)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.title}</div>
                          <div style={{ fontSize: "0.78rem", color: "var(--text-soft)" }}>Qty: {item.quantity}</div>
                        </div>
                      </div>
                      <strong style={{ color: "var(--violet)", whiteSpace: "nowrap" }}>${(item.price * item.quantity).toFixed(2)}</strong>
                    </li>
                  ))}
                </ul>

                <div style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--lavender-mid), transparent)", margin: "1rem 0" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.92rem", color: "var(--text-mid)" }}>
                    <span>Subtotal</span><span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.92rem", color: "var(--text-mid)" }}>
                    <span>Shipping</span><span style={{ color: "#059669", fontWeight: 700 }}>Free</span>
                  </div>
                  <div className="checkout-total" style={{ paddingTop: "0.6rem", borderTop: "2px dashed var(--border)", marginTop: "0.3rem" }}>
                    Total: ${cartTotal.toFixed(2)}
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.25rem" }}>
                  {["🔒 Secure", "🚚 Fast Delivery", "↩️ Easy Returns"].map((badge) => (
                    <span key={badge} style={{
                      background: "var(--lavender)",
                      color: "var(--violet)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "0.35rem 0.8rem",
                      borderRadius: "999px",
                      border: "1.5px solid var(--border)",
                    }}>{badge}</span>
                  ))}
                </div>
              </div>

              {/* Delivery Form */}
              <form className="checkout-form" onSubmit={handleSubmit} noValidate>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--violet)", marginBottom: "1.25rem" }}>📋 Delivery Details</h2>

                <label>
                  Full Name
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" autoComplete="name" />
                </label>
                <label>
                  Email Address
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" />
                </label>
                <label>
                  Phone Number
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="123-456-7890" autoComplete="tel" />
                </label>
                <label>
                  Delivery Address
                  <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Street, city, postal code" rows="3" autoComplete="street-address" />
                </label>

                {error && <div className="form-error">⚠️ {error}</div>}

                <button
                  type="submit"
                  className="btn btn-primary checkout-submit"
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.8 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}
                >
                  {isSubmitting ? "Processing…" : "Confirm Order →"}
                </button>
              </form>
            </div>
          </>
        ) : (
          /* Success */
          <div className="order-confirmation">
            <div style={{
              width: 88, height: 88, borderRadius: "50%",
              background: "linear-gradient(135deg, #10b981, #059669)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 1.75rem",
              boxShadow: "0 12px 30px rgba(16,185,129,0.35)",
              fontSize: "2.2rem", color: "#fff", fontWeight: 900,
              animation: "slideUp 0.5s cubic-bezier(0.175,0.885,0.32,1.275) both",
            }}>✓</div>
            <h1>Order Confirmed!</h1>
            <p>
              Thank you, <strong>{formData.name}</strong>! Your order{" "}
              <span style={{
                display: "inline-block",
                background: "var(--lavender)",
                color: "var(--violet)",
                fontWeight: 800,
                padding: "0.2rem 0.7rem",
                borderRadius: 8,
                border: "1.5px solid var(--border)",
              }}>{orderNumber}</span>{" "}
              has been placed and is on its way.
            </p>
            <p style={{ color: "var(--text-soft)", fontSize: "0.9rem" }}>Redirecting you to the home page shortly…</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.75rem" }}>
              <button className="btn btn-primary" onClick={() => navigate("/")}>Back to Home</button>
              <button className="btn btn-secondary" onClick={() => navigate("/product")}>Continue Shopping</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
