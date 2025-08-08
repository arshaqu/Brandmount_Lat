import React from 'react';
import './Home.css';
import Footer from './Footer';
import Header from './Header';

const jobOpenings = [
  {
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full Time',
    description: 'Build stunning interfaces using React and Tailwind CSS.'
  },
  {
    title: 'UI/UX Designer',
    location: 'Kerala',
    type: 'Contract',
    description: 'Design seamless, engaging user experiences.'
  },
  {
    title: 'Backend Engineer',
    location: 'Hybrid',
    type: 'Full Time',
    description: 'Architect scalable backend systems with Node.js.'
  },
];

function Careers() {
  return (
<div>
        <Header/>
        <div className="careers-container ">
      <h1 style={{color:'black'}} className="careers-title">Careers at Our Studio</h1>

      <div className="jobs-grid">
        {jobOpenings.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-header">
              <h2 className="job-title">{job.title}</h2>
              <span className="job-type">{job.type}</span>
            </div>
            <p className="job-location">{job.location}</p>
            <p className="job-description">{job.description}</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>

      <p className="footer-note">
        Can't find a role? Reach out to us at{' '}
        <span style={{color:'black'}} className="highlight-email">info@brandconcur.in</span>
      </p>
    </div>
      <Footer/>
</div>
  );
}

export default Careers;
