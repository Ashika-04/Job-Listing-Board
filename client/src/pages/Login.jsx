import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login Successful!");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <p className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </form>
        <p className="register-link">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
        <div className="social-login">
          <p>Or Login with</p>
          <button className="google-btn">Login with Google</button>
          <button className="linkedin-btn">Login with LinkedIn</button>
          <button className="github-btn">Login with GitHub</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
