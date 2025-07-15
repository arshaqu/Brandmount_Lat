import React from 'react';
import './Home.css'; // Ensure you add the CSS given below

function ServicesPage() {
  return (
    <section className="services-section">
      <h2 style={{ justifyItems: 'start' }} className="section-title">Our Services</h2>
      <p className="section-subtext">
        Let Brandmount be your partner in crafting a<br />
        unique brand identity that sets you apart.
      </p>

      <div className="services-grid">
        {[
          'Brand Strategy & Corporate Identity',
          'Digital Marketing & Social Advertising',
          'Web Development & E-Commerce',
          'Sales Automation & Funnel Development',
          'Personal Branding & Leadership Positioning',
          'Professional Media Production.',
        ].map((service, index) => (
          <div className="service-card" key={index}>
            <div className="arrow">↗</div>
            <div className="service-text">{service}</div>
            <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
          </div>
        ))}
      </div>

      {/* Our Clients */}
      <h2 className="section-title clients-title">Our Clients</h2>
      <div className="clients-row">
        {[
          'jaseel avulan',
          'iBrand.',
          'ball∞n',
          'connect',
          'F O C U S',
          'CHOOSE',
          'MOODY',
        ].map((client, index) => (
          <div className={`client-logo ${index === 0 ? 'active' : ''}`} key={index}>
            {client}
          </div>
        ))}
      </div>


    </section>
  );
}

export default ServicesPage;
