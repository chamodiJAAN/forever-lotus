import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AppPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const features = [
    {
      icon: "🚀",
      title: "Skip the Queues",
      description: "Order ahead and skip the wait. Your flowers will be ready when you arrive."
    },
    {
      icon: "🌿",
      title: "Fresh Picks",
      description: "Get exclusive access to our freshest blooms and seasonal collections."
    },
    {
      icon: "🎁",
      title: "Special Offers",
      description: "Enjoy app-only discounts and loyalty rewards with every purchase."
    },
    {
      icon: "📦",
      title: "Easy Delivery",
      description: "Track your flower deliveries in real-time, right from your phone."
    }
  ];

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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
            style={{ fontSize: "4rem", marginBottom: "10px" }}
          >
            🌸
          </motion.div>
          <h1 style={{
            fontSize: "3.5rem",
            color: "#fff",
            marginBottom: "10px",
            fontFamily: "'Georgia', serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)"
          }}>
            The Forever Lotus App
          </h1>
          <p style={{
            fontSize: "1.5rem",
            color: "#ffcc80",
            fontStyle: "italic",
            textShadow: "0 2px 10px rgba(0,0,0,0.2)"
          }}>
            Your daily bloom, just a tap away. 🌷
          </p>
        </motion.div>
      </motion.section>

      {/* App Features Section */}
      <motion.section
        variants={staggerContainer}
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
          <h2 style={{
            fontSize: "2.5rem",
            color: "#fff",
            textAlign: "center",
            marginBottom: "15px",
            fontFamily: "'Georgia', serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.2)"
          }}>
            Why You'll Love Our App 💖
          </h2>
          <p style={{
            textAlign: "center",
            fontSize: "1.1rem",
            color: "#ccc",
            marginBottom: "40px",
            maxWidth: "700px",
            margin: "0 auto 40px auto"
          }}>
            Skip the queues and savour the moment. Whether you're ordering ahead or exploring our collections, the Forever Lotus app brings beauty closer to you.
          </p>

          {/* Features Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
            marginBottom: "50px"
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  background: "rgba(255,255,255,0.15)",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  padding: "30px 20px",
                  borderRadius: "15px",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{feature.icon}</div>
                <h3 style={{
                  color: "#fff",
                  fontSize: "1.2rem",
                  marginBottom: "10px"
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: "#ccc", fontSize: "0.95rem", lineHeight: "1.5" }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Download Buttons */}
          <motion.div
            variants={fadeInUp}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              paddingTop: "30px",
              borderTop: "1px solid rgba(255,255,255,0.08)"
            }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(10px)",
                padding: "15px 35px",
                borderRadius: "50px",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "1.1rem",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
            >
              <span style={{ fontSize: "1.8rem" }}>🍎</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "0.7rem", opacity: 0.7 }}>DOWNLOAD ON THE</div>
                <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>App Store</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(10px)",
                padding: "15px 35px",
                borderRadius: "50px",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "1.1rem",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
            >
              <span style={{ fontSize: "1.8rem" }}>📱</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "0.7rem", opacity: 0.7 }}>GET IT ON</div>
                <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Google Play</div>
              </div>
            </motion.a>
          </motion.div>

          <p style={{
            textAlign: "center",
            color: "#aaa",
            fontSize: "0.9rem",
            marginTop: "20px",
            fontStyle: "italic"
          }}>
            🌸 Free on iOS & Android
          </p>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
}

export default AppPage;