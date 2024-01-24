import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login: React.FC = () => {
  return (
    <section className="login-container-wrapper">
      <div className="login-container">
        <fieldset>
          <legend>Login</legend>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </fieldset>
        <p className="create-account-link">
          Don't have an account? <Link to="/signup">Create one here</Link>.
        </p>
      </div>
    </section>
  );
};

export default Login;
