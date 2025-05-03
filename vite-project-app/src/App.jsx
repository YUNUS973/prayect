import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [amounts, setAmounts] = useState({});
  const [showCart, setShowCart] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.amount, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.amount, 0);

  const increaseAmount = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const decreaseAmount = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      )
    );
  };

  return (
    <div className="app">
      <Header totalItems={totalItems} onCartClick={() => setShowCart(true)} />
      <Main cart={cart} setCart={setCart} amounts={amounts} setAmounts={setAmounts} />
      <Footer />

      {showCart && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul>
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span>{item.name}</span>
                        <button
                          onClick={() => increaseAmount(item.id)}
                          className="cart-btn"
                        >
                          +
                        </button>
                        <span>{item.amount}</span>
                        <button
                          onClick={() => decreaseAmount(item.id)}
                          className="cart-btn"
                        >
                          -
                        </button>
                      </div>
                      <div>${(item.price * item.amount).toFixed(2)}</div>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: "20px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    textAlign: "right",
                  }}
                >
                  Total: ${totalPrice.toFixed(2)}
                </div>
              </>
            )}
            <button onClick={() => setShowCart(false)} style={{ marginTop: "20px" }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

