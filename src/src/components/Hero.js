function Hero() {
  return (
    <section style={{
      textAlign: "center",
      padding: "80px 20px",
      background: "linear-gradient(135deg, #fce4ec 0%, #f3e5f5 100%)",
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{
        fontSize: "4rem",
        color: "#1b5e20",
        margin: 0,
        fontFamily: "'Georgia', serif",
        fontWeight: "bold"
      }}>
        Forever Lotus
      </h1>
      <p style={{
        fontSize: "1.8rem",
        color: "#4a148c",
        margin: "10px 0",
        fontStyle: "italic"
      }}>
        Happy Days <span style={{ color: "#e91e63" }}>with</span> Flowers
      </p>
      <button style={{
        marginTop: "30px",
        padding: "15px 40px",
        background: "#2e7d32",
        color: "#fff",
        border: "none",
        borderRadius: "30px",
        fontSize: "1.2rem",
        fontWeight: "bold",
        cursor: "pointer",
        letterSpacing: "2px",
        boxShadow: "0 4px 15px rgba(46,125,50,0.4)"
      }}>
        🌸 GRAB YOUR FLOWERS
      </button>
    </section>
  );
}

export default Hero;