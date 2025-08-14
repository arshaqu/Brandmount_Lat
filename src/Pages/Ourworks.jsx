import React, { useRef } from 'react';
import './Home.css';
import Image1 from './../Assets/dr.jpg';
import Image2 from './../Assets/ourWorks2.jpg';
import Image3 from './../Assets/ourWorks3.jpg';
import Image4 from './../Assets/ourWorks4.jpg';

const worksData = [
  {
    title: 'Strategic Visual Branding',
    description: 'Crafted a unique and consistent brand identity.',
    image: Image1,
  },
  {
    title: 'Smart E Commerce Solutions',
    description: 'Built a scalable, secure online store with smooth user experience',
    image: Image2,
  },
  {
    title: 'Impactful Digital Campaign',
    description: 'Launched a targeted campaign to boost brand visibility and engagement.',
    image: Image3,
  },
  {
    title: 'Social Media Campaign',
    description: 'Executed a successful digital marketing campaign.',
    image: Image4,
  },
];

function Ourworks() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

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

      <div className="our-works-container">
        <button className="scroll-btn left" onClick={scrollLeft}>❮</button>

        <div className="our-works-grid" ref={scrollRef}>
          {worksData.map((work, index) => (
            <div style={{ height: 'auto', minWidth: '250px' }} className="work-card" key={index}>
              <div className="image-wrapper">
                <img src={work.image} alt={work.title} />
                <div className="overlay"></div>
              </div>
              <div className="card-content">
                <h4 className="work-title poppinsx">{work.title}</h4>
                <p className="work-description poppins">{work.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>❯</button>
      </div>
    </div>
  );
}

export default Ourworks;
