import React from 'react';
import './Login.css'; // Make sure this path is correct

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to DonateNow</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
