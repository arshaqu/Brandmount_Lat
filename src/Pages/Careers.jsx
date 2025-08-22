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
      <h1 style={{color:'black'}} className="careers-title poppin">Careers at Our Studio</h1>

      <div className="jobs-grid">
        {jobOpenings.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-header poppin">
              <h2  className="job-title poppin">{job.title}</h2>
              <span  className="job-type poppin">{job.type}</span>
            </div>
            <p  className="job-location poppinsx">{job.location}</p>
            <p style={{letterSpacing:'2px'}} className="job-description poppins">{job.description}</p>
              {/* CONTACT US Button for desktop only */}
<a
  href="/contact"
  style={{ letterSpacing: '2px'  }}
  className="hidden md:block text-lg font-semibold text-black mt-4  text-center md:text-center 
             relative z-10 overflow-hidden border border-black px-5 py-3 text-black duration-200
             before:absolute before:inset-0 before:z-[-1] before:bg-black before:translate-x-[-100%]
             before:transition-transform before:duration-300 hover:before:translate-x-0 hover:text-white"
>
  SUMBIT
</a>

          </div>
        ))}
      </div>

      <p className="footer-note poppins">
        Can't find a role? Reach out to us at{' '}
        <span style={{color:'black'}} className="highlight-email poppins">Info@brandmount.in</span>
      </p>
    </div>
      <Footer/>
</div>
  );
}

export default Careers;
