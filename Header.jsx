import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css'; // Adjust path if needed

function Header() {
  return (
    <header className="header">
      <h1 className="logo">DonateNow</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/causes">Causes</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link> {/* ✅ Login link added here */}
      </nav>
    </header>
  );
}

export default Header;
