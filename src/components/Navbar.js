import { Link } from "react-router-dom";
import logo from "../assets/images/logo_image.png"; 

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 50px",
      background: "#8B6B4A",
      borderBottom: "2px solid #D4A373",
      position: "sticky",    // ← THIS makes it stick
      top: 0,                // ← Sticks to top
      zIndex: 1000,          // ← Stays above everything
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
    }}>
      {/* Logo */}
      <Link to="/" style={{ 
        textDecoration: "none", 
        display: "flex", 
        alignItems: "center", 
        gap: "12px" 
      }}>
        <img 
          src={logo} 
          alt="Forever Lotus Logo" 
          style={{ 
            height: "50px",
            width: "auto",
            objectFit: "contain"
          }} 
        />
        <h2 style={{ 
          color: "#fff", 
          fontFamily: "'Georgia', serif",
          fontStyle: "italic",
          fontSize: "1.0rem",
          margin: 0,
          fontWeight: "bold",
          letterSpacing: "2px",
          textShadow: "0 2px 10px rgba(0,0,0,0.2)"
        }}>
          Forever Lotus
        </h2>
      </Link>
      
      {/* Navigation Menu */}
      <div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
        <Link to="/about" style={{ 
          color: "#F5E6D3",
          textDecoration: "none", 
          fontWeight: "500",
          fontSize: "1rem",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
          padding: "8px 5px",
          borderBottom: "2px solid transparent"
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#fff";
          e.target.style.borderBottom = "2px solid #F5E6D3";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#F5E6D3";
          e.target.style.borderBottom = "2px solid transparent";
        }}>
          About Us
        </Link>
        <Link to="/location" style={{ 
          color: "#F5E6D3",
          textDecoration: "none", 
          fontWeight: "500",
          fontSize: "1rem",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
          padding: "8px 5px",
          borderBottom: "2px solid transparent"
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#fff";
          e.target.style.borderBottom = "2px solid #F5E6D3";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#F5E6D3";
          e.target.style.borderBottom = "2px solid transparent";
        }}>
          Location
        </Link>
        <Link to="/app" style={{ 
          color: "#F5E6D3",
          textDecoration: "none", 
          fontWeight: "500",
          fontSize: "1rem",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
          padding: "8px 5px",
          borderBottom: "2px solid transparent"
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#fff";
          e.target.style.borderBottom = "2px solid #F5E6D3";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#F5E6D3";
          e.target.style.borderBottom = "2px solid transparent";
        }}>
          App
        </Link>
        <Link to="/contact" style={{ 
          color: "#F5E6D3",
          textDecoration: "none", 
          fontWeight: "500",
          fontSize: "1rem",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
          padding: "8px 5px",
          borderBottom: "2px solid transparent"
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#fff";
          e.target.style.borderBottom = "2px solid #F5E6D3";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#F5E6D3";
          e.target.style.borderBottom = "2px solid transparent";
        }}>
          Contact Us
        </Link>
        <Link to="/login" style={{ 
          background: "rgba(255,255,255,0.15)", 
          color: "#fff", 
          padding: "8px 25px", 
          borderRadius: "25px",
          textDecoration: "none",
          fontWeight: "500",
          border: "1px solid rgba(255,255,255,0.3)",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "rgba(255,255,255,0.3)";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "rgba(255,255,255,0.15)";
          e.target.style.transform = "scale(1)";
        }}>
          Login
        </Link>
        <Link to="/signup" style={{ 
          color: "#F5E6D3",
          textDecoration: "none", 
          fontWeight: "500",
          fontSize: "1rem",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
          padding: "8px 5px",
          borderBottom: "2px solid transparent"
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#fff";
          e.target.style.borderBottom = "2px solid #F5E6D3";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#F5E6D3";
          e.target.style.borderBottom = "2px solid transparent";
        }}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;