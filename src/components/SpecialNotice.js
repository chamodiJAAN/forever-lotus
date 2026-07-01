function SpecialNotice() {
  return (
    <section style={{
      padding: "30px 20px",
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(20px)",
        borderRadius: "20px",
        padding: "20px 40px",
        width: "100%",
        maxWidth: "1400px", 
        textAlign: "center",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
        margin: "0 auto",
      }}
      onMouseEnter={(e) => {
        e.target.style.boxShadow = "0 15px 50px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = "0 10px 40px rgba(0,0,0,0.2)";
      }}>
        <p style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#fff",
          letterSpacing: "1px",
          textShadow: "0 2px 10px rgba(0,0,0,0.2)",
          margin: 0
        }}>
          🌟 SPECIAL NOTICE: Free delivery on first order! Use code: FIRSTBLOOM 🌟
        </p>
      </div>
    </section>
  );
}

export default SpecialNotice;