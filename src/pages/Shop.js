import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products, categories } from "../data/products";

function Shop() {
  // Simple state for category and search
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  // Function to filter products
  const getFilteredProducts = () => {
    console.log("🔍 Filtering with category:", category, "search:", search);
    
    let result = [...products]; // Copy all products
    
    // Filter by category (exact match, case sensitive)
    if (category !== "All") {
      result = result.filter(p => p.category === category);
      console.log(`📂 After category filter (${category}):`, result.length, "products");
    }
    
    // Filter by search term
    if (search.trim() !== "") {
      const term = search.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
      );
      console.log("🔎 After search filter:", result.length, "products");
    }
    
    console.log("✅ Final filtered products:", result.length);
    return result;
  };

  const filteredProducts = getFilteredProducts();

  // Add to cart
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.id === product.id);
    
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`🌷 ${product.name} added to your cart!`);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
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
            🌸 Our Flower Shop
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#ffcc80",
            fontStyle: "italic"
          }}>
            Find the perfect bloom for every moment 💐
          </p>
        </motion.div>
      </motion.section>

      {/* Shop Content */}
      <section style={{
        padding: "20px 40px 80px 40px",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
        {/* Filters */}
        <div style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(15px)",
          borderRadius: "20px",
          padding: "25px 30px",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          border: "1px solid rgba(255,255,255,0.05)"
        }}>
          {/* Category Buttons */}
          <div style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap"
          }}>
            <button
              key="all"
              onClick={() => {
                console.log("🔄 Clicked: All");
                setCategory("All");
                setSearch("");
              }}
              style={{
                padding: "10px 20px",
                borderRadius: "25px",
                border: category === "All" ? "2px solid #ffcc80" : "1px solid rgba(255,255,255,0.15)",
                background: category === "All" ? "rgba(255,204,128,0.25)" : "rgba(255,255,255,0.05)",
                color: category === "All" ? "#ffcc80" : "#ccc",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: category === "All" ? "bold" : "normal",
                transition: "all 0.3s ease"
              }}
            >
              🌿 All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  console.log(`🔄 Clicked: ${cat}`);
                  setCategory(cat);
                  setSearch("");
                }}
                style={{
                  padding: "10px 20px",
                  borderRadius: "25px",
                  border: category === cat ? "2px solid #ffcc80" : "1px solid rgba(255,255,255,0.15)",
                  background: category === cat ? "rgba(255,204,128,0.25)" : "rgba(255,255,255,0.05)",
                  color: category === cat ? "#ffcc80" : "#ccc",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: category === cat ? "bold" : "normal",
                  transition: "all 0.3s ease"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{
            display: "flex",
            gap: "10px",
            alignItems: "center"
          }}>
            <input
              type="text"
              placeholder="🔍 Search flowers..."
              value={search}
              onChange={(e) => {
                console.log("🔍 Searching:", e.target.value);
                setSearch(e.target.value);
                if (e.target.value === "") {
                  setCategory("All");
                }
              }}
              style={{
                padding: "10px 18px",
                borderRadius: "25px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "#fff",
                fontSize: "0.9rem",
                outline: "none",
                minWidth: "200px"
              }}
              onFocus={(e) => e.target.style.borderColor = "#ffcc80"}
              onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
            />
            <span style={{ 
              color: "#888", 
              fontSize: "0.9rem",
              background: "rgba(255,255,255,0.05)",
              padding: "5px 14px",
              borderRadius: "15px",
              border: "1px solid rgba(255,255,255,0.05)"
            }}>
              {filteredProducts.length} flowers
            </span>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "25px"
          }}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(15px)",
                  borderRadius: "20px",
                  padding: "25px",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "330px"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-8px)";
                  e.target.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <div>
                  <div style={{ fontSize: "4.5rem", marginBottom: "10px" }}>
                    {product.image}
                  </div>
                  <h3 style={{
                    color: "#fff",
                    fontSize: "1.15rem",
                    marginBottom: "5px",
                    fontFamily: "'Georgia', serif"
                  }}>
                    {product.name}
                  </h3>
                  <p style={{
                    color: "#aaa",
                    fontSize: "0.85rem",
                    marginBottom: "10px",
                    lineHeight: "1.5"
                  }}>
                    {product.description}
                  </p>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "8px",
                    flexWrap: "wrap"
                  }}>
                    <span style={{
                      color: "#ffcc80",
                      fontSize: "0.85rem"
                    }}>
                      ⭐ {product.rating} ({product.reviews})
                    </span>
                    <span style={{
                      color: product.inStock ? "#81c784" : "#ff8a65",
                      fontSize: "0.75rem",
                      fontWeight: "bold"
                    }}>
                      {product.inStock ? "✅ In Stock" : "❌ Out of Stock"}
                    </span>
                  </div>
                  <span style={{
                    color: "#666",
                    fontSize: "0.7rem",
                    fontStyle: "italic",
                    background: "rgba(255,255,255,0.03)",
                    padding: "2px 12px",
                    borderRadius: "10px"
                  }}>
                    {product.category}
                  </span>
                </div>

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "15px",
                  paddingTop: "15px",
                  borderTop: "1px solid rgba(255,255,255,0.05)"
                }}>
                  <span style={{
                    color: "#fff",
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    fontFamily: "'Georgia', serif"
                  }}>
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    style={{
                      padding: "10px 24px",
                      borderRadius: "25px",
                      border: "none",
                      background: product.inStock ? "rgba(255,204,128,0.2)" : "rgba(255,255,255,0.05)",
                      color: product.inStock ? "#ffcc80" : "#666",
                      cursor: product.inStock ? "pointer" : "not-allowed",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      if (product.inStock) {
                        e.target.style.background = "rgba(255,204,128,0.4)";
                        e.target.style.transform = "scale(1.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (product.inStock) {
                        e.target.style.background = "rgba(255,204,128,0.2)";
                        e.target.style.transform = "scale(1)";
                      }
                    }}
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: "center",
            padding: "80px 20px",
            color: "#888"
          }}>
            <div style={{ fontSize: "5rem", marginBottom: "20px" }}>🌸</div>
            <p style={{ fontSize: "1.3rem", color: "#ccc" }}>
              No flowers found in "{category}"
            </p>
            <p style={{ color: "#666", marginTop: "10px" }}>
              Try selecting a different category or clear the search
            </p>
            <button
              onClick={() => {
                setCategory("All");
                setSearch("");
              }}
              style={{
                marginTop: "20px",
                padding: "12px 35px",
                borderRadius: "25px",
                border: "1px solid rgba(255,204,128,0.3)",
                background: "rgba(255,204,128,0.1)",
                color: "#ffcc80",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,204,128,0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,204,128,0.1)";
              }}
            >
              Show All Flowers
            </button>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Shop;