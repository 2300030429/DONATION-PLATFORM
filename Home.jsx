import React from 'react';
import './page.css';
import educationImg from '../assets/edpic.jpg';
import healthImg from '../assets/healthpic.jpg';
import foodImg from '../assets/foodpic.jpg';
import heroImg from '../assets/donpic.jpg'; // 👈 new hero image import

const Home = () => {
  return (
    <div className="home">
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${heroImg})` }} // 👈 inline background
      >
        <div className="hero-content">
          <h1>Make a Difference Today</h1>
          <p>Your small act of kindness can change a life forever.</p>
          <a href="/donate" className="hero-button">Donate Now</a>
        </div>
      </div>

      <section className="cause-section">
        <h2>Our Causes</h2>
        <div className="cards-container">
          <div className="cause-card">
            <img src={educationImg} alt="Education" />
            <h3>Education for All</h3>
            <p>Help provide quality education to underprivileged children across rural areas.</p>
          </div>

          <div className="cause-card">
            <img src={healthImg} alt="Healthcare" />
            <h3>Healthcare Aid</h3>
            <p>Support medical camps, vaccinations, and treatment for the needy.</p>
          </div>

          <div className="cause-card">
            <img src={foodImg} alt="Food Help" />
            <h3>Food for the Hungry</h3>
            <p>Join our mission to fight hunger by sponsoring meals and food drives.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
