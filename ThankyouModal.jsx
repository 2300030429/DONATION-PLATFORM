import React from 'react';
import './ThankYouModal.css';

function ThankYouModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank You!</h2>
        <p>Your donation is appreciated and will make a real difference.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ThankYouModal;
