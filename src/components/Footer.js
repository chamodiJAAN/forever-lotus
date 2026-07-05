import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{
      background: "rgba(0, 0, 0, 0.85)",
      backdropFilter: "blur(20px)",
      padding: "40px 50px 20px 50px", // Reduced top/bottom padding
      marginTop: "30px",
      borderTop: "2px solid rgba(255,255,255,0.05)"
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "30px", // Reduced gap between columns
        marginBottom: "25px" // Reduced bottom margin
      }}>
        {/* Column 1: Brand Info */}
        <div>
          <h3 style={{
            color: "#fff",
            fontSize: "1.3rem", // Smaller font
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            marginBottom: "10px", // Reduced margin
            letterSpacing: "1px"
          }}>
            🌸 Forever Lotus
          </h3>
          <p style={{
            color: "#ccc",
            fontSize: "0.85rem", // Smaller font
            lineHeight: "1.6", // Tighter line height
            marginBottom: "8px" // Reduced margin
          }}>
            Fresh flowers, delivered with love. 
            Hand-crafted bouquets for every occasion.
          </p>
          <p style={{
            color: "#888",
            fontSize: "0.75rem", // Smaller font
            fontStyle: "italic",
            margin: 0
          }}>
            🌱 Bloom with joy since 2026
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 style={{
            color: "#ffcc80",
            fontSize: "1rem", // Smaller font
            marginBottom: "10px", // Reduced margin
            fontWeight: "600",
            letterSpacing: "1px"
          }}>
            📌 EXPLORE
          </h4>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0
          }}>
            {[
                { name: "Shop", path: "/shop" },  // ← Add this
                { name: "About Us", path: "/about" },
                { name: "Location", path: "/location" },
                { name: "App", path: "/app" },
                { name: "Contact Us", path: "/contact" },
                { name: "Login", path: "/login" },
                { name: "Sign Up", path: "/signup" }
              ].map((item, index) => (
              <li key={index} style={{ marginBottom: "6px" }}> {/* Reduced margin */}
                <Link to={item.path} style={{
                  color: "#ccc",
                  textDecoration: "none",
                  fontSize: "0.85rem", // Smaller font
                  transition: "all 0.3s ease",
                  display: "inline-block"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ffcc80";
                  e.target.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#ccc";
                  e.target.style.transform = "translateX(0)";
                }}>
                  → {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Get in Touch */}
        <div>
          <h4 style={{
            color: "#ffcc80",
            fontSize: "1rem", // Smaller font
            marginBottom: "10px", // Reduced margin
            fontWeight: "600",
            letterSpacing: "1px"
          }}>
            📞 GET IN TOUCH
          </h4>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0
          }}>
            <li style={{ marginBottom: "8px", color: "#ccc", fontSize: "0.85rem" }}> {/* Reduced margin & font */}
              📧 <a href="mailto:www.foreverlotus@gmail.com" style={{
                color: "#ccc",
                textDecoration: "none",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#ffcc80"}
              onMouseLeave={(e) => e.target.style.color = "#ccc"}>
                www.foreverlotus@gmail.com
              </a>
            </li>
            <li style={{ marginBottom: "8px", color: "#ccc", fontSize: "0.85rem" }}>
              📞 <span style={{ color: "#ccc" }}>+94 77 123 4567</span>
            </li>
            <li style={{ marginBottom: "8px", color: "#ccc", fontSize: "0.85rem" }}>
              📍 <span style={{ color: "#ccc" }}>123 Garden Street, Flower City</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Follow Us + Newsletter */}
        <div>
          <h4 style={{
            color: "#ffcc80",
            fontSize: "1rem", // Smaller font
            marginBottom: "10px", // Reduced margin
            fontWeight: "600",
            letterSpacing: "1px"
          }}>
            🌿 FOLLOW US
          </h4>
          <div style={{
            display: "flex",
            gap: "10px", // Reduced gap
            marginBottom: "12px", // Reduced margin
            flexWrap: "wrap"
          }}>
            {[
              { icon: "📌", label: "Facebook" },
              { icon: "📸", label: "Instagram" },
              { icon: "🐦", label: "Twitter" },
              { icon: "🎵", label: "TikTok" },
              { icon: "📧", label: "YouTube" }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "#ccc",
                  textDecoration: "none",
                  fontSize: "0.75rem", // Smaller font
                  transition: "all 0.3s ease",
                  padding: "3px 10px", // Reduced padding
                  borderRadius: "15px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#fff";
                  e.target.style.background = "rgba(255,255,255,0.1)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#ccc";
                  e.target.style.background = "rgba(255,255,255,0.03)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {social.icon} {social.label}
              </a>
            ))}
          </div>

          {/* Simple Newsletter - More Compact */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            padding: "10px 12px", // Reduced padding
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.05)"
          }}>
            <p style={{
              color: "#aaa",
              fontSize: "0.75rem", // Smaller font
              marginBottom: "8px" // Reduced margin
            }}>
              🌸 Subscribe for fresh updates
            </p>
            <div style={{
              display: "flex",
              gap: "6px"
            }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: "6px 12px", // Reduced padding
                  borderRadius: "15px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  fontSize: "0.75rem", // Smaller font
                  outline: "none"
                }}
              />
              <button style={{
                padding: "6px 14px", // Reduced padding
                borderRadius: "15px",
                border: "none",
                background: "rgba(255,204,128,0.2)",
                color: "#ffcc80",
                cursor: "pointer",
                fontSize: "0.75rem", // Smaller font
                fontWeight: "bold",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,204,128,0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,204,128,0.2)";
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - More Compact */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "15px", // Reduced padding
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px"
      }}>
        <p style={{
          color: "#888",
          fontSize: "0.75rem", // Smaller font
          margin: 0
        }}>
          © 2026 Forever Lotus (Pvt) Ltd. All rights reserved. 
          Made with ❤️ in Colombo · Sri Lanka 🇱🇰
        </p>
        <div style={{
          display: "flex",
          gap: "15px"
        }}>
          <a href="#" style={{
            color: "#888",
            textDecoration: "none",
            fontSize: "0.7rem", // Smaller font
            transition: "color 0.3s ease"
          }}
          onMouseEnter={(e) => e.target.style.color = "#ffcc80"}
          onMouseLeave={(e) => e.target.style.color = "#888"}>
            Privacy Policy
          </a>
          <a href="#" style={{
            color: "#888",
            textDecoration: "none",
            fontSize: "0.7rem",
            transition: "color 0.3s ease"
          }}
          onMouseEnter={(e) => e.target.style.color = "#ffcc80"}
          onMouseLeave={(e) => e.target.style.color = "#888"}>
            Terms
          </a>
          <a href="#" style={{
            color: "#888",
            textDecoration: "none",
            fontSize: "0.7rem",
            transition: "color 0.3s ease"
          }}
          onMouseEnter={(e) => e.target.style.color = "#ffcc80"}
          onMouseLeave={(e) => e.target.style.color = "#888"}>
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;