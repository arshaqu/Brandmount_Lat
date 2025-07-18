import React from 'react';
import './Home.css';
import { MdOutlineArrowOutward } from "react-icons/md";

function ServicesPage() {
  const services = [
    {
      title: 'Brand Strategy & Corporate Identity',
      description: 'We create consistent branding to elevate your identity.',
    },
    {
      title: 'Digital Marketing & Social Advertising',
      description: 'Reach your audience through SEO, PPC & social media.',
    },
    {
      title: 'Web Development & E-Commerce',
      description: 'Build responsive websites and powerful online stores.',
    },
    {
      title: 'Sales Automation & Funnel Development',
      description: 'Optimize your sales journey with automated funnels.',
    },
    {
      title: 'Personal Branding & Leadership Positioning',
      description: 'Position yourself as a leader in your niche.',
    },
    {
      title: 'Professional Media Production.',
      description: 'From photoshoots to promo videos — we do it all.',
    },
  ];

  return (
    <section className="services-section">
      <h2 style={{ justifyItems: 'start' }} className="section-title poppins">Our Services</h2>
      <p className="section-subtext poppins">
        Let Brandmount be your partner in crafting a<br />
        unique brand identity that sets you apart.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
  <div className="service-card poppins group" key={index}>
  <div className="service-title-container flex items-center gap-2">
    <div className="arrow-wrapper relative w-[24px] h-[24px]">
      <MdOutlineArrowOutward className="arrow absolute top-0 left-0 transition-all duration-300 ease-in-out" />
      <div className="black-square absolute top-0 left-0 w-full h-full opacity-0 scale-75 transition-all duration-300 ease-in-out bg-black rounded-sm"></div>
    </div>
    <div style={{ textAlign: 'left', fontSize: '20px', marginBottom: '20px',marginLeft:'20px' }} className="service-text">
      {service.title}
    </div>
  </div>

  <div className="service-number">{String(index + 1).padStart(2, '0')}</div>

  <div className="service-hover-content">
    <p style={{ textAlign: 'left' }} className="service-description">
      {service.description}
    </p>
  </div>
</div>


        ))}
      </div>

      {/* Our Clients */}
      <h2 className="section-title clients-title">Our Clients</h2>
      <div className="clients-row">
        {[
          'iBrand',
          'ball∞n',
          'connect',
          'F O C U S',
          'CHOOSE',
          'MOODY',
        ].map((client, index) => (
          <div className="client-logo" key={index}>
            {client}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesPage;
