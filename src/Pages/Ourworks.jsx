import React from 'react';
import './Home.css';
import Image from './../Assets/Explore.png';

function Ourworks() {
  return (
    <div className="our-works-section">
      <div className="our-works-text">
        <h3 className='poppinsx' >Our Works</h3>
        <p className='poppin'>
          Personal branding is the process of establishing 
          and promoting a unique identity and image for
          oneself, typically in a professional context.
        </p>
      </div>

      <div className="our-works-grid">
        {[1, 2, 3, 4].map((_, index) => (
          <div className="work-card" key={index}>
            <div className="card-content">
              <h4 className="work-title poppinsx">Project Title {index + 1}</h4>
              <p className="work-description poppins">
                This is a short 10-word project description for display demo.
              </p>
            </div>
            <img src={Image} alt={`Work ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourworks;
