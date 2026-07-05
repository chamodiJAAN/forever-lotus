import { Link } from "react-router-dom";
import logo from "../assets/images/logo_image.png";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 40px",
      background: "#8B6B4A",
      borderBottom: "2px solid #D4A373",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
    }}>
      {/* Logo */}
      <Link to="/" style={{ 
        textDecoration: "none", 
        display: "flex", 
        alignItems: "center", 
        gap: "10px" 
      }}>
        <img 
          src={logo} 
          alt="Forever Lotus Logo" 
          style={{ 
            height: "40px",
            width: "auto",
            objectFit: "contain"
          }} 
        />
        <h2 style={{ 
          color: "#fff", 
          fontFamily: "'Georgia', serif",
          fontStyle: "italic",
          fontSize: "1.5rem",
          margin: 0,
          fontWeight: "bold",
          letterSpacing: "2px",
          textShadow: "0 2px 10px rgba(0,0,0,0.2)"
        }}>
          Forever Lotus
        </h2>
      </Link>
      
      {/* Navigation Menu - Short & Clean */}
      <div style={{ 
        display: "flex", 
        gap: "20px", 
        alignItems: "center",
        fontSize: "0.9rem"
      }}>
        <Link to="/about" style={{ 
          color: "#F5E6D3",
          textDecoration: "none", 
          fontWeight: "500",
          fontSize: "0.9rem",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
          padding: "6px 4px",
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
          About
        </Link>
        
        <Link to="/location" style={{ 
          color: "#F5E6D3",
          textDecoration: "none", 
          fontWeight: "500",
          fontSize: "0.9rem",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
          padding: "6px 4px",
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
          fontSize: "0.9rem",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
          padding: "6px 4px",
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
        
        <Link to="/shop" style={{ 
          color: "#F5E6D3",
          textDecoration: "none", 
          fontWeight: "500",
          fontSize: "0.9rem",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
          padding: "6px 4px",
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
          Shop
        </Link>
        
        <Link to="/cart" style={{ 
          color: "#F5E6D3",
          textDecoration: "none", 
          fontWeight: "500",
          fontSize: "0.9rem",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
          padding: "6px 4px",
          borderBottom: "2px solid transparent",
          position: "relative"
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#fff";
          e.target.style.borderBottom = "2px solid #F5E6D3";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#F5E6D3";
          e.target.style.borderBottom = "2px solid transparent";
        }}>
          🛒 Cart
        </Link>
        
        {/* Login Button */}
        <Link to="/login" style={{ 
          background: "rgba(255,255,255,0.15)", 
          color: "#fff", 
          padding: "6px 18px", 
          borderRadius: "20px",
          textDecoration: "none",
          fontWeight: "500",
          fontSize: "0.85rem",
          border: "1px solid rgba(255,255,255,0.2)",
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
      </div>
    </nav>
  );
}

export default Navbar;