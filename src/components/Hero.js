// Import your background image
import backgroundImage from "../assets/images/eco-friendly-swap.jpg";

import { Link } from "react-router-dom"; // Add this import

function Hero() {
  return (
    <section style={{
      textAlign: "center",
      padding: "120px 20px",
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    }}>
      {/* Content - directly on background */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1 style={{
          fontSize: "5rem",
          color: "#fff",
          margin: 0,
          fontFamily: "'Georgia', serif",
          fontWeight: "bold",
          textShadow: "0 4px 20px rgba(0,0,0,0.5)",
          letterSpacing: "3px"
        }}>
          Forever Lotus
        </h1>
        <p style={{
          fontSize: "2.2rem",
          color: "#fff",
          margin: "15px 0",
          fontStyle: "italic",
          textShadow: "0 2px 15px rgba(0,0,0,0.5)"
        }}>
          Happy Days <span style={{ color: "#ffcc80" }}>with</span> Flowers
        </p>
        
        {/* 🌸 GRAB YOUR FLOWERS - Now a Link to Shop */}
        <Link to="/shop">
          <button style={{
            marginTop: "35px",
            padding: "18px 50px",
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            border: "2px solid rgba(255,255,255,0.5)",
            borderRadius: "50px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
            letterSpacing: "3px",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.3)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.15)";
            e.target.style.transform = "scale(1)";
          }}>
            🌸 GRAB YOUR FLOWERS
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;