import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(savedCart);
  }, []);

  // Update total whenever cart changes
  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotal(newTotal);
  }, [cartItems]);

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          style={{
            background: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(20px)",
            borderRadius: "30px",
            padding: "40px 60px",
            maxWidth: "900px",
            width: "100%",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <h1 style={{
            fontSize: "3rem",
            color: "#fff",
            marginBottom: "10px",
            fontFamily: "'Georgia', serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)"
          }}>
            🛒 Your Cart
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#ffcc80",
            fontStyle: "italic"
          }}>
            {cartItems.length} items in your cart 💐
          </p>
        </motion.div>
      </motion.section>

      {/* Cart Content */}
      <section style={{
        padding: "20px 40px 80px 40px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {cartItems.length > 0 ? (
          <>
            {/* Cart Items */}
            <div style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(15px)",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid rgba(255,255,255,0.05)",
              marginBottom: "30px"
            }}>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "15px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    gap: "15px",
                    flexWrap: "wrap"
                  }}
                >
                  {/* Product Info */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    flex: 1,
                    minWidth: "200px"
                  }}>
                    <span style={{ fontSize: "2.5rem" }}>{item.image}</span>
                    <div>
                      <h4 style={{
                        color: "#fff",
                        margin: 0,
                        fontSize: "1rem",
                        fontFamily: "'Georgia', serif"
                      }}>
                        {item.name}
                      </h4>
                      <span style={{
                        color: "#888",
                        fontSize: "0.8rem"
                      }}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div style={{ minWidth: "80px" }}>
                    <span style={{
                      color: "#ffcc80",
                      fontSize: "1.1rem",
                      fontWeight: "bold"
                    }}>
                      ${item.price}
                    </span>
                  </div>

                  {/* Quantity Controls */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    minWidth: "120px"
                  }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.15)",
                        background: "rgba(255,255,255,0.05)",
                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.15)"}
                      onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.05)"}
                    >
                      −
                    </button>
                    <span style={{
                      color: "#fff",
                      fontSize: "1.1rem",
                      minWidth: "30px",
                      textAlign: "center"
                    }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.15)",
                        background: "rgba(255,255,255,0.05)",
                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.15)"}
                      onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.05)"}
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal & Remove */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    minWidth: "120px",
                    justifyContent: "flex-end"
                  }}>
                    <span style={{
                      color: "#fff",
                      fontSize: "1rem",
                      fontWeight: "bold"
                    }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "50%",
                        border: "none",
                        background: "rgba(255, 87, 34, 0.15)",
                        color: "#ff8a65",
                        cursor: "pointer",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => e.target.style.background = "rgba(255, 87, 34, 0.3)"}
                      onMouseLeave={(e) => e.target.style.background = "rgba(255, 87, 34, 0.15)"}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(15px)",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px"
            }}>
              <div>
                <p style={{
                  color: "#ccc",
                  fontSize: "0.9rem",
                  margin: "5px 0"
                }}>
                  Total Items: <strong style={{ color: "#fff" }}>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</strong>
                </p>
                <p style={{
                  color: "#ccc",
                  fontSize: "0.9rem",
                  margin: "5px 0"
                }}>
                  Total Price: <strong style={{ color: "#ffcc80", fontSize: "1.4rem" }}>${total.toFixed(2)}</strong>
                </p>
              </div>
              <div style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap"
              }}>
                <button
                  onClick={clearCart}
                  style={{
                    padding: "12px 30px",
                    borderRadius: "25px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#ccc",
                    cursor: "pointer",
                    fontSize: "0.95rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.1)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.05)";
                    e.target.style.color = "#ccc";
                  }}
                >
                  🗑️ Clear Cart
                </button>
                <Link to="/contact">
                  <button style={{
                    padding: "12px 35px",
                    borderRadius: "25px",
                    border: "none",
                    background: "rgba(255,204,128,0.2)",
                    color: "#ffcc80",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255,204,128,0.4)";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255,204,128,0.2)";
                    e.target.style.transform = "scale(1)";
                  }}>
                    ✅ Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          // Empty Cart
          <div style={{
            textAlign: "center",
            padding: "80px 20px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.05)"
          }}>
            <div style={{ fontSize: "5rem", marginBottom: "20px" }}>🛒</div>
            <h2 style={{
              color: "#fff",
              fontSize: "2rem",
              fontFamily: "'Georgia', serif",
              marginBottom: "10px"
            }}>
              Your Cart is Empty
            </h2>
            <p style={{
              color: "#aaa",
              fontSize: "1.1rem",
              marginBottom: "30px"
            }}>
              Looks like you haven't added any flowers yet! 🌸
            </p>
            <Link to="/shop">
              <button style={{
                padding: "14px 40px",
                borderRadius: "30px",
                border: "none",
                background: "rgba(255,204,128,0.2)",
                color: "#ffcc80",
                cursor: "pointer",
                fontSize: "1.1rem",
                fontWeight: "bold",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,204,128,0.4)";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,204,128,0.2)";
                e.target.style.transform = "scale(1)";
              }}>
                🌸 Start Shopping
              </button>
            </Link>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Cart;