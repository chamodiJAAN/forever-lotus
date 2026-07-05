import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Simulate login function
  const simulateLogin = (method, userData) => {
    setIsLoading(true);
    setFormStatus({
      submitted: true,
      error: false,
      message: `✅ ${method} login successful! Welcome, ${userData.name || 'flower lover'}! 🌸`
    });

    setTimeout(() => {
      setIsLoading(false);
      // Redirect to home after successful login
      navigate('/');
    }, 2000);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please fill in all fields."
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please enter a valid email address."
      });
      return;
    }

    if (formData.password.length < 6) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Password must be at least 6 characters long."
      });
      return;
    }

    // Successful login
    simulateLogin('Email', { name: formData.email.split('@')[0] });
  };

  // Social Login Handlers
  const handleGoogleLogin = () => {
    // In a real app, you'd use Firebase Auth or OAuth
    // This is a simulation
    const googleUser = {
      name: "Google User",
      email: "user@gmail.com",
      photo: "https://ui-avatars.com/api/?name=Google+User&background=ffcc80&color=fff&size=40"
    };
    simulateLogin('Google', googleUser);
  };

  const handleFacebookLogin = () => {
    // In a real app, you'd use Facebook OAuth
    const fbUser = {
      name: "Facebook User",
      email: "user@facebook.com"
    };
    simulateLogin('Facebook', fbUser);
  };

  // Guest Login - Auto-login with random guest name
  const handleGuestLogin = () => {
    const guestNames = [
      "🌷 Flower Lover",
      "🌸 Bloom Seeker",
      "🌿 Nature Friend",
      "💐 Rose Enthusiast",
      "🌺 Lotus Lover",
      "🌻 Sunflower Fan"
    ];
    const randomName = guestNames[Math.floor(Math.random() * guestNames.length)];
    
    // Auto-login as guest
    setIsLoading(true);
    setFormStatus({
      submitted: true,
      error: false,
      message: `✅ Welcome, ${randomName}! You're in as a guest! 🌸`
    });

    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1500);
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
            maxWidth: "480px",
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
            🔐
          </motion.div>
          <h1 style={{
            fontSize: "2.8rem",
            color: "#fff",
            marginBottom: "10px",
            fontFamily: "'Georgia', serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)"
          }}>
            Welcome Back
          </h1>
          <p style={{
            fontSize: "1.1rem",
            color: "#ccc",
            fontStyle: "italic",
            marginBottom: "30px"
          }}>
            Sign in to your Forever Lotus account 🌷
          </p>

          {/* Form Status Message */}
          {formStatus.submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                padding: "12px 18px",
                borderRadius: "15px",
                marginBottom: "25px",
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

          {/* Social Login Buttons */}
          <div style={{ marginBottom: "25px" }}>
            <p style={{
              color: "#aaa",
              fontSize: "0.9rem",
              marginBottom: "15px"
            }}>
              Continue with
            </p>
            <div style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center"
            }}>
              {/* Google Button */}
              <motion.button
                onClick={handleGoogleLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  borderRadius: "15px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontWeight: "500"
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>🔵</span>
                Google
              </motion.button>

              {/* Facebook Button */}
              <motion.button
                onClick={handleFacebookLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  borderRadius: "15px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontWeight: "500"
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>🔷</span>
                Facebook
              </motion.button>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "25px"
          }}>
            <div style={{
              flex: 1,
              height: "1px",
              background: "rgba(255,255,255,0.1)"
            }}></div>
            <span style={{ color: "#aaa", fontSize: "0.85rem" }}>or</span>
            <div style={{
              flex: 1,
              height: "1px",
              background: "rgba(255,255,255,0.1)"
            }}></div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div style={{ marginBottom: "18px", textAlign: "left" }}>
              <label style={{
                display: "block",
                color: "#fff",
                marginBottom: "6px",
                fontWeight: "500",
                fontSize: "0.9rem"
              }}>
                📧 Email Address
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
                🔑 Password
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

            {/* Remember Me & Forgot Password */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              fontSize: "0.9rem"
            }}>
              <label style={{
                color: "#ccc",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer"
              }}>
                <input type="checkbox" style={{
                  accentColor: "#ffcc80",
                  width: "16px",
                  height: "16px",
                  cursor: "pointer"
                }} />
                Remember me
              </label>
              <a href="#" style={{
                color: "#ffcc80",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,204,128,0.3)",
                paddingBottom: "2px"
              }}>
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
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
              {isLoading ? "⏳ Signing in..." : "🔐 Sign In"}
            </motion.button>
          </form>

          {/* Sign Up Link */}
          <p style={{
            marginTop: "20px",
            color: "#ccc",
            fontSize: "0.9rem"
          }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{
            color: "#ffcc80",
            textDecoration: "none",
            fontWeight: "bold",
            borderBottom: "1px solid rgba(255,204,128,0.3)",
            paddingBottom: "2px"
          }}>
            Sign up
          </Link>
          </p>

          {/* Guest Warning */}
            <div style={{
              marginTop: "15px",
              padding: "12px 16px",
              borderRadius: "12px",
              background: "rgba(255, 193, 7, 0.15)",
              border: "1px solid rgba(255, 193, 7, 0.2)",
              marginBottom: "15px"
            }}>
              <p style={{
                color: "#ffd54f",
                fontSize: "0.8rem",
                margin: 0,
                lineHeight: "1.4"
              }}>
                ⚠️ <strong>Guest Mode:</strong> You can browse the website but cannot place orders, 
                save favorites, or leave reviews. <Link to="/signup" style={{ 
                  color: "#ffcc80", 
                  textDecoration: "underline" 
                }}>Sign up</Link> for full access!
              </p>
            </div>

          {/* Guest Login Button */}
          <motion.button
            onClick={handleGuestLogin}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={isLoading}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "14px",
              borderRadius: "30px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)",
              color: "#ffcc80",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              letterSpacing: "1px",
              opacity: isLoading ? 0.6 : 1
            }}
          >
            👤 Continue as Guest (Auto-Login)
          </motion.button>

          <div style={{
            marginTop: "15px",
            paddingTop: "15px",
            borderTop: "1px solid rgba(255,255,255,0.06)"
          }}>
            <p style={{
              color: "#888",
              fontSize: "0.75rem",
              fontStyle: "italic"
            }}>
              🌸 Demo: Use any email + password (6+ chars) • Guest login auto-logs in 2s
            </p>
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
}

export default Login;