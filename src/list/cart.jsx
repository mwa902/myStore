import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <main>
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-state">
            <h2>Your cart is empty</h2>
            <p>Pick a few favorites from the product list to begin.</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/product")}
            >
              Browse Products
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div className="quantity-row">
                    <button
                      className="btn btn-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity-label">
                      Quantity: {item.quantity}
                    </span>
                    <button
                      className="btn btn-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-secondary remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-total">
              Total: ${cartTotal.toFixed(2)}
              <br />
              <button
                className="btn btn-primary checkout-button"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
