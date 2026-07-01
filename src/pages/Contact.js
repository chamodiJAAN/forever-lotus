import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please fill in all required fields."
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please enter a valid email address."
      });
      return;
    }

    // Success (simulate sending)
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you! Your message has been sent. We'll get back to you soon! 🌸"
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setFormStatus({ submitted: false, error: false, message: "" });
      }, 3000);
    }, 3000);
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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
            style={{ fontSize: "4rem", marginBottom: "10px" }}
          >
            💌
          </motion.div>
          <h1 style={{
            fontSize: "3.5rem",
            color: "#fff",
            marginBottom: "10px",
            fontFamily: "'Georgia', serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)"
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: "1.3rem",
            color: "#ffcc80",
            fontStyle: "italic",
            textShadow: "0 2px 10px rgba(0,0,0,0.2)"
          }}>
            We'd love to hear from you! 🌷
          </p>
        </motion.div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          padding: "40px 20px 80px 20px",
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
            maxWidth: "800px",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          }}
        >
          <h2 style={{
            fontSize: "2rem",
            color: "#fff",
            marginBottom: "10px",
            fontFamily: "'Georgia', serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.2)",
            textAlign: "center"
          }}>
            Send Us a Message 💬
          </h2>
          <p style={{
            textAlign: "center",
            color: "#ccc",
            marginBottom: "30px",
            fontSize: "1rem"
          }}>
            Have a question, feedback, or custom flower request? Reach out to us!
          </p>

          {/* Form Status Message */}
          {formStatus.submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                padding: "15px 20px",
                borderRadius: "15px",
                marginBottom: "25px",
                background: formStatus.error ? "rgba(255, 87, 34, 0.2)" : "rgba(76, 175, 80, 0.2)",
                border: `1px solid ${formStatus.error ? "rgba(255, 87, 34, 0.3)" : "rgba(76, 175, 80, 0.3)"}`,
                color: formStatus.error ? "#ff8a65" : "#81c784",
                textAlign: "center",
                fontSize: "1.05rem"
              }}
            >
              {formStatus.message}
            </motion.div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{
                display: "block",
                color: "#fff",
                marginBottom: "8px",
                fontWeight: "500",
                fontSize: "0.95rem"
              }}>
                Your Name * 
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Jane Doe"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "15px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#ffcc80";
                  e.target.style.background = "rgba(255,255,255,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.15)";
                  e.target.style.background = "rgba(255,255,255,0.06)";
                }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{
                display: "block",
                color: "#fff",
                marginBottom: "8px",
                fontWeight: "500",
                fontSize: "0.95rem"
              }}>
                Your Email * 
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g., jane@example.com"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "15px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#ffcc80";
                  e.target.style.background = "rgba(255,255,255,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.15)";
                  e.target.style.background = "rgba(255,255,255,0.06)";
                }}
              />
            </div>

            {/* Subject */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{
                display: "block",
                color: "#fff",
                marginBottom: "8px",
                fontWeight: "500",
                fontSize: "0.95rem"
              }}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g., Custom Flower Arrangement"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "15px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#ffcc80";
                  e.target.style.background = "rgba(255,255,255,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.15)";
                  e.target.style.background = "rgba(255,255,255,0.06)";
                }}
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: "25px" }}>
              <label style={{
                display: "block",
                color: "#fff",
                marginBottom: "8px",
                fontWeight: "500",
                fontSize: "0.95rem"
              }}>
                Your Message * 
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                rows="5"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "15px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                  resize: "vertical",
                  fontFamily: "'Georgia', serif"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#ffcc80";
                  e.target.style.background = "rgba(255,255,255,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.15)";
                  e.target.style.background = "rgba(255,255,255,0.06)";
                }}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "30px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
                letterSpacing: "2px"
              }}
            >
              💌 Send Message
            </motion.button>
          </form>

          {/* Alternative Contact Info */}
          <div style={{
            marginTop: "30px",
            paddingTop: "25px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
            textAlign: "center"
          }}>
            <div>
              <div style={{ fontSize: "2rem" }}>📧</div>
              <p style={{ color: "#ccc", fontSize: "0.9rem", marginTop: "5px" }}>
                <a href="mailto:www.foreverlotus@gmail.com" style={{ 
                  color: "#ffcc80", 
                  textDecoration: "none" 
                }}>
                  Email Us
                </a>
              </p>
            </div>
            <div>
              <div style={{ fontSize: "2rem" }}>📞</div>
              <p style={{ color: "#ccc", fontSize: "0.9rem", marginTop: "5px" }}>
                +94 77 123 4567
              </p>
            </div>
            <div>
              <div style={{ fontSize: "2rem" }}>📍</div>
              <p style={{ color: "#ccc", fontSize: "0.9rem", marginTop: "5px" }}>
                123 Garden Street
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
}

export default Contact;