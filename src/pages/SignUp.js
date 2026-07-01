import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SignUp() {
  const navigate = useNavigate();
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please fill in all fields."
      });
      return;
    }

    // Name validation (minimum 2 characters)
    if (formData.fullName.length < 2) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please enter your full name (minimum 2 characters)."
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

    // Password validation (minimum 6 characters)
    if (formData.password.length < 6) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Password must be at least 6 characters long."
      });
      return;
    }

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Passwords do not match."
      });
      return;
    }

    // Terms validation
    if (!formData.agreeTerms) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please agree to the Terms & Conditions."
      });
      return;
    }

    // Successful registration
    setIsLoading(true);
    setFormStatus({
      submitted: true,
      error: false,
      message: "✅ Account created successfully! Welcome to Forever Lotus! 🌸"
    });

    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 2500);
  };

  return (
    <>
      <Navbar />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
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
            maxWidth: "520px",
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
            style={{ fontSize: "3.5rem", marginBottom: "10px" }}
          >
            🌱
          </motion.div>
          <h1 style={{
            fontSize: "2.8rem",
            color: "#fff",
            marginBottom: "10px",
            fontFamily: "'Georgia', serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)"
          }}>
            Create Account
          </h1>
          <p style={{
            fontSize: "1.1rem",
            color: "#ccc",
            fontStyle: "italic",
            marginBottom: "25px"
          }}>
            Join the Forever Lotus family! 🌷
          </p>

          {formStatus.submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                padding: "12px 18px",
                borderRadius: "15px",
                marginBottom: "20px",
                background: formStatus.error ? "rgba(255, 87, 34, 0.2)" : "rgba(76, 175, 80, 0.2)",
                border: `1px solid ${formStatus.error ? "rgba(255, 87, 34, 0.3)" : "rgba(76, 175, 80, 0.3)"}`,
                color: formStatus.error ? "#ff8a65" : "#81c784",
                textAlign: "center",
                fontSize: "0.95rem"
              }}
            >
              {formStatus.message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div style={{ marginBottom: "18px", textAlign: "left" }}>
              <label style={{
                display: "block",
                color: "#fff",
                marginBottom: "6px",
                fontWeight: "500",
                fontSize: "0.9rem"
              }}>
                👤 Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Jane Doe"
                disabled={isLoading}
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
            <div style={{ marginBottom: "18px", textAlign: "left" }}>
              <label style={{
                display: "block",
                color: "#fff",
                marginBottom: "6px",
                fontWeight: "500",
                fontSize: "0.9rem"
              }}>
                📧 Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                disabled={isLoading}
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

            {/* Password */}
            <div style={{ marginBottom: "18px", textAlign: "left" }}>
              <label style={{
                display: "block",
                color: "#fff",
                marginBottom: "6px",
                fontWeight: "500",
                fontSize: "0.9rem"
              }}>
                🔑 Password * (min 6 characters)
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  disabled={isLoading}
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
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    color: "#aaa",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    padding: "5px"
                  }}
                >
                  {showPassword ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label style={{
                display: "block",
                color: "#fff",
                marginBottom: "6px",
                fontWeight: "500",
                fontSize: "0.9rem"
              }}>
                ✅ Confirm Password *
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  disabled={isLoading}
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
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isLoading}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    color: "#aaa",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    padding: "5px"
                  }}
                >
                  {showConfirmPassword ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div style={{
              marginBottom: "25px",
              textAlign: "left"
            }}>
              <label style={{
                color: "#ccc",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                fontSize: "0.95rem"
              }}>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  disabled={isLoading}
                  style={{
                    accentColor: "#ffcc80",
                    width: "18px",
                    height: "18px",
                    cursor: "pointer"
                  }}
                />
                I agree to the{" "}
                <a href="#" style={{
                  color: "#ffcc80",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,204,128,0.3)"
                }}>
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" style={{
                  color: "#ffcc80",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,204,128,0.3)"
                }}>
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Sign Up Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
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
                cursor: isLoading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                letterSpacing: "2px",
                opacity: isLoading ? 0.6 : 1
              }}
            >
              {isLoading ? "⏳ Creating Account..." : "🌱 Create Account"}
            </motion.button>
          </form>

          {/* Login Link */}
          <p style={{
            marginTop: "20px",
            color: "#ccc",
            fontSize: "0.95rem"
          }}>
            Already have an account?{" "}
            <Link to="/login" style={{
              color: "#ffcc80",
              textDecoration: "none",
              fontWeight: "bold",
              borderBottom: "1px solid rgba(255,204,128,0.3)",
              paddingBottom: "2px"
            }}>
              Sign In
            </Link>
          </p>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
}

export default SignUp;