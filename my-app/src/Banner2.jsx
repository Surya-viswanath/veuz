import React from 'react';
import './Banner2.css'; 

function Banner2() {
  return (
    <div className="subscription-section">
      <div className="subscription-content">
        <h1>Subscribe to get special price</h1>
        <p>Don't want to miss something? Subscribe now and get special promotions and monthly newsletter.</p>
        <div className="subscription-form">
          <input type="email" placeholder="Type your email here" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Banner2;