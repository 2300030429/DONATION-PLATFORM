import React, { useState } from 'react';
import ThankYouModal from './ThankYouModal';
import './DonationCard.css';

function DonationCard({ title, description, goal }) {
  const [showModal, setShowModal] = useState(false);

  const handleDonateClick = () => {
    setShowModal(true);
  };

  return (
    <div className="donation-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Goal: ${goal}</strong></p>
      <button onClick={handleDonateClick}>Donate Now</button>
      {showModal && <ThankYouModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default DonationCard;
