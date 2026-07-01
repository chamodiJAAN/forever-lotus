import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Location() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section with White Glass Card */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          padding: "80px 20px",
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
            padding: "50px 60px",
            maxWidth: "900px",
            width: "100%",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <h1 style={{
            fontSize: "3.5rem",
            color: "#fff",
            marginBottom: "15px",
            fontFamily: "'Georgia', serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)"
          }}>
            📍 Our Location
          </h1>
          <p style={{
            fontSize: "1.3rem",
            color: "#ffcc80",
            fontStyle: "italic",
            textShadow: "0 2px 10px rgba(0,0,0,0.2)"
          }}>
            Come visit us and smell the flowers! 🌸
          </p>
        </motion.div>
      </motion.section>

      {/* Location Details + Map Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          padding: "40px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            background: "rgba(255, 255, 255, 0.10)",
            backdropFilter: "blur(20px)",
            borderRadius: "30px",
            padding: "50px 60px",
            maxWidth: "1200px",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "start"
          }}>
            {/* Left Side: Address & Hours */}
            <div>
              <h2 style={{
                fontSize: "2rem",
                color: "#fff",
                marginBottom: "20px",
                fontFamily: "'Georgia', serif",
                textShadow: "0 2px 20px rgba(0,0,0,0.2)"
              }}>
                Visit Us 🌷
              </h2>

              {/* Address */}
              <div style={{
                background: "rgba(255,255,255,0.06)",
                padding: "20px",
                borderRadius: "15px",
                marginBottom: "20px",
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <h3 style={{ color: "#ffcc80", fontSize: "1.1rem", marginBottom: "10px" }}>
                  📮 Address
                </h3>
                <p style={{ color: "#f0f0f0", fontSize: "1rem", lineHeight: "1.6" }}>
                  123 Garden Street<br />
                  Flower City, FC 12345<br />
                  Sri Lanka
                </p>
              </div>

              {/* Hours */}
              <div style={{
                background: "rgba(255,255,255,0.06)",
                padding: "20px",
                borderRadius: "15px",
                marginBottom: "20px",
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <h3 style={{ color: "#ffcc80", fontSize: "1.1rem", marginBottom: "10px" }}>
                  🕐 Store Hours
                </h3>
                <div style={{ color: "#f0f0f0", fontSize: "1rem", lineHeight: "1.8" }}>
                  <p><span style={{ color: "#ccc" }}>Monday - Friday:</span> 9:00 AM - 7:00 PM</p>
                  <p><span style={{ color: "#ccc" }}>Saturday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span style={{ color: "#ccc" }}>Sunday:</span> 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              {/* Contact */}
              <div style={{
                background: "rgba(255,255,255,0.06)",
                padding: "20px",
                borderRadius: "15px",
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <h3 style={{ color: "#ffcc80", fontSize: "1.1rem", marginBottom: "10px" }}>
                  📞 Contact
                </h3>
                <p style={{ color: "#f0f0f0", fontSize: "1rem" }}>
                  📧 <a href="mailto:www.foreverlotus@gmail.com" style={{ 
                    color: "#ffcc80", 
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,204,128,0.3)"
                  }}>
                    www.foreverlotus@gmail.com
                  </a>
                </p>
                <p style={{ color: "#f0f0f0", fontSize: "1rem" }}>
                  📞 +94 77 123 4567
                </p>
              </div>
            </div>

            {/* Right Side: Google Map - FIXED */}
            <div>
              <h2 style={{
                fontSize: "2rem",
                color: "#fff",
                marginBottom: "20px",
                fontFamily: "'Georgia', serif",
                textShadow: "0 2px 20px rgba(0,0,0,0.2)"
              }}>
                Find Us 🗺️
              </h2>
              <div style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.1)",
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}>
                <iframe
                  title="Forever Lotus Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1642806966033!2d81.05390207476981!3d6.870909993127791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae465c8f3bc96cd%3A0x6cd145034354c820!2sElla%20Flower%20Garden%20Resort!5e0!3m2!1sen!2slk!4v1782838598379!5m2!1sen!2slk"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p style={{
                color: "#ccc",
                fontSize: "0.9rem",
                marginTop: "10px",
                textAlign: "center",
                fontStyle: "italic"
              }}>
                📍 Click the map for directions
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
}

export default Location;