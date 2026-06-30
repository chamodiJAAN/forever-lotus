import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      background: "#fff",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
    }}>
      <h2 style={{ color: "#2e7d32", fontStyle: "italic" }}>🌿 Forever Lotus</h2>
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <Link to="/about">About Us</Link>
        <Link to="/location">Location</Link>
        <Link to="/app">App</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login" style={{ 
          background: "#2e7d32", 
          color: "#fff", 
          padding: "8px 20px", 
          borderRadius: "20px",
          textDecoration: "none"
        }}>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;