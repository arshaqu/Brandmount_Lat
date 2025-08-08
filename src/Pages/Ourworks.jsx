import React from 'react';
import './Home.css'; // Make sure this file includes the updated styles below
import Image from './../Assets/Explore.png';
import Image1 from './../Assets/ourWorks1.jpg'
import Image2 from './../Assets/ourWorks2.jpg'
import Image3 from './../Assets/ourWorks3.jpg'
import Image4 from './../Assets/ourWorks4.jpg'


const worksData = [
  {
    title: 'Strategic Visual Branding',
    description: 'Crafted a unique and consistent brand identity.',
    image: Image1,
  },
  {
    title: 'Smart E Commerce Solutions',
    description: 'Built a scalable, secure online store with smooth user experience',
    image: Image2,
  },
  {
    title: 'Impactful Digital Campaign',
    description: 'Launched a targeted campaign to boost brand visibility and engagement.',
    image: Image3,
  },
  {
    title: 'Social Media Campaign',
    description: 'Executed a successful digital marketing campaign.',
    image: Image4,
  },
];

function Ourworks() {
  return (
    <div className="our-works-section">
      <div className="our-works-text">
        <h3 className="poppinsx">Our Works</h3>
        <p className="poppin">
          Personal branding is the process of establishing 
          and promoting a unique identity and image for
          oneself, typically in a professional context.
        </p>
      </div>

      <div className="our-works-grid">  
        {worksData.map((work, index) => (
          <div style={{height:'auto'}} className="work-card" key={index}>
            <img  src={work.image} alt={work.title} />
            <div className="card-content">
              <h4  className="work-title poppinsx">{work.title}</h4>
              <p className="work-description poppins">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourworks;