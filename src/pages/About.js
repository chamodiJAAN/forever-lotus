import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
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

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Master Florist",
      bio: "With 20+ years of experience, Sarah brings passion to every arrangement.",
      image: "🌸"
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      bio: "Michael ensures every delivery is perfect and on time.",
      image: "🌿"
    },
    {
      name: "Emma Rodriguez",
      role: "Creative Director",
      bio: "Emma designs our seasonal collections with artistic vision.",
      image: "🌷"
    },
    {
      name: "David Kim",
      role: "Customer Experience",
      bio: "David makes sure every customer feels special and heard.",
      image: "💐"
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
          <h1 style={{
            fontSize: "3.5rem",
            color: "#fff",
            marginBottom: "15px",
            fontFamily: "'Georgia', serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)"
          }}>
            About Forever Lotus 🌸
          </h1>
          <p style={{
            fontSize: "1.3rem",
            color: "#ffcc80",
            fontStyle: "italic",
            textShadow: "0 2px 10px rgba(0,0,0,0.2)"
          }}>
            Where every petal tells a story of love, joy, and nature's beauty.
          </p>
        </motion.div>
      </motion.section>

      {/* Mission Section with White Glass Card */}
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
            marginBottom: "20px",
            fontFamily: "'Georgia', serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.2)"
          }}>
            Our Mission 🌿
          </h2>
          <p style={{
            fontSize: "1.15rem",
            lineHeight: "1.8",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#f0f0f0"
          }}>
            At Forever Lotus, we believe flowers have the power to heal, inspire, and connect.
            Our mission is to bring the beauty of nature into every home, celebration, and heartfelt moment.
            We source our flowers sustainably, craft each arrangement with love, and deliver joy to your doorstep.
          </p>

          {/* Values Cards */}
          <motion.div
            variants={fadeInUp}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "20px",
              marginTop: "40px"
            }}
          >
            {[
              { icon: "🌱", title: "Sustainability", desc: "Eco-friendly sourcing" },
              { icon: "💚", title: "Quality", desc: "Premium fresh flowers" },
              { icon: "❤️", title: "Passion", desc: "Crafted with love" },
              { icon: "🤝", title: "Community", desc: "Supporting local growers" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  background: "rgba(255,255,255,0.15)",
                  transition: { duration: 0.2 }
                }}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "25px 20px",
                  borderRadius: "15px",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{item.icon}</div>
                <h3 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: "5px" }}>{item.title}</h3>
                <p style={{ color: "#ccc", fontSize: "0.95rem" }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Team Section with White Glass Card */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          padding: "40px 20px 80px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
          borderRadius: "30px",
          padding: "50px 60px",
          maxWidth: "1200px",
          width: "100%",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "2.5rem",
              color: "#fff",
              textAlign: "center",
              marginBottom: "10px",
              fontFamily: "'Georgia', serif",
              textShadow: "0 2px 20px rgba(0,0,0,0.2)"
            }}
          >
            Meet Our Team 🌷
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              color: "#ccc",
              marginBottom: "40px"
            }}
          >
            Passionate people behind Forever Lotus
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "25px"
            }}
          >
            {teamMembers.map((member, index) => (
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
                  padding: "25px 20px",
                  borderRadius: "15px",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease"
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    fontSize: "3.5rem",
                    marginBottom: "10px",
                    display: "inline-block"
                  }}
                >
                  {member.image}
                </motion.div>
                <h3 style={{
                  color: "#fff",
                  fontSize: "1.2rem",
                  marginBottom: "3px"
                }}>
                  {member.name}
                </h3>
                <p style={{
                  color: "#ffcc80",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  marginBottom: "8px"
                }}>
                  {member.role}
                </p>
                <p style={{ color: "#ccc", fontSize: "0.9rem", lineHeight: "1.4" }}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}

export default About;