function Footer() {
  return (
    <footer style={{
      padding: "40px 50px", // Same padding as navbar
      display: "flex",
      justifyContent: "center",
      background: "rgba(0, 0, 0, 0.2)",
    }}>
      {/* Full Width Glass Card - Matches Navbar */}
      <div style={{
        background: "rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(20px)",
        borderRadius: "20px",
        padding: "35px 40px",
        width: "100%",
        maxWidth: "calc(100% - 0px)", // Will match navbar width
        textAlign: "center",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
        margin: "0 auto",
      }}
      onMouseEnter={(e) => {
        e.target.style.boxShadow = "0 30px 80px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";
      }}>
        <h3 style={{ 
          color: "#fff",
          fontSize: "1.8rem",
          fontFamily: "'Georgia', serif",
          fontWeight: "bold",
          letterSpacing: "2px",
          marginBottom: "12px",
          textShadow: "0 2px 20px rgba(0,0,0,0.2)"
        }}>
          📍 Visit Us
        </h3>
        <p style={{ 
          margin: "8px 0", 
          fontSize: "1.1rem",
          color: "#fff"
        }}>
          📧 <a href="mailto:www.foreverlotus@gmail.com" style={{ 
            color: "#ffcc80", 
            textDecoration: "none",
            fontWeight: "500",
            borderBottom: "2px solid rgba(255,204,128,0.3)",
            paddingBottom: "3px",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.borderBottom = "2px solid #ffcc80";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderBottom = "2px solid rgba(255,204,128,0.3)";
          }}>
            www.foreverlotus@gmail.com
          </a>
        </p>
        <div style={{
          width: "40px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #ffcc80, transparent)",
          margin: "15px auto"
        }}></div>
        <p style={{ 
          marginTop: "8px", 
          fontSize: "0.9rem", 
          opacity: 0.8,
          letterSpacing: "1px",
          color: "#fff"
        }}>
          © 2026 Forever Lotus — Bloom with joy 🌸
        </p>
      </div>
    </footer>
  );
}

export default Footer;