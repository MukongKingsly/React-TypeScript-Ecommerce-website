// Signup.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.scss";

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="login-container-wrapper">
      <div className="signup-container">
        <fieldset>
          <legend>Sign Up</legend>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Repeat your password"
            />
          </div>
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </fieldset>
        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>.
        </p>
      </div>
    </section>
  );
};

export default Signup;
