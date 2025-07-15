import React from 'react';
import './Home.css';
import Image from './../Assets/Explore.png';

function Ourworks() {
  return (
    <div className="our-works-section">
      <div className="our-works-text">
        <h3>Our Works</h3>
        <p>
          Personal branding is the process of establishing <br />
          and promoting a unique identity and image for <br />
          oneself, typically in a professional context.
        </p>
      </div>

      <div className="our-works-grid">
        {[1, 2, 3, 4].map((_, index) => (
          <div className="work-card" key={index}>
            <img src={Image} alt={`Work ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourworks;
