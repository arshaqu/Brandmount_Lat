import React from 'react';
import './Home.css';
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

// ✅ Import client logos
import Pqube from '../Assets/pqube.png';
import Gokui from '../Assets/gokui.png'
import Royal from '../Assets/royal.png'
import Ruman from '../Assets/ruman.png'
import Tng from '../Assets/tng.png'
import Fortwall from '../Assets/fortwall.png'
import Synosys from '../Assets/synosys.png'


function ServicesPage() {
  const navigate = useNavigate();
  const services = [
    {
      title: 'Brand Strategy & Corporate Identity',
      description: 'We create consistent branding to elevate your identity.',
      path: '/brand-strategy',
    },
    {
      title: 'Digital Marketing & Social Advertising',
      description: 'Reach your audience through SEO, PPC & social media.',
      path: '/digital-marketing',
    },
    {
      title: 'Web Development & E-Commerce',
      description: 'Build responsive websites and powerful online stores.',
      path: '/web-development',
    },
    {
      title: 'Sales Automation & Funnel Development',
      description: 'Optimize your sales journey with automated funnels.',
      path: '/sales-funnelng',
    },
    {
      title: 'Personal Branding & Leadership Positioning',
      description: 'Position yourself as a leader in your niche.',
      path: '/personal-branding',
    },
    {
      title: 'Professional Media Production.',
      description: 'From photoshoots to promo videos — we do it all.',
      path: '/media-production',
    },
  ];

  const clients = [
    { src: Pqube, alt: 'Pqube' },
    { src: Gokui, alt: 'Gokui' },
    { src: Royal, alt: 'royalmart' },
    { src: Fortwall, alt: 'Fortwall' },
    { src: Ruman, alt: 'Ruman' },
    { src: Tng, alt: 'TravelNgrow' },
    { src: Synosys, alt: 'Synosys' },

  ];

  return (
    <section className="services-section">
      <h2 style={{ justifyItems: 'start' }} className="section-title poppins">Our Services</h2>
      <p className="section-subtext poppins">
        Let Brandmount be your partner in crafting a
        unique brand identity that sets you apart.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            onClick={() => navigate(service.path)}
            style={{ cursor: 'pointer' }}
            className="service-card poppins group"
            key={index}
          >
            <div className="service-title-container flex items-center gap-2">
              <div className="arrow-wrapper relative w-[24px] h-[24px]">
                <MdOutlineArrowOutward className="arrow absolute top-0 left-0 transition-all duration-300 ease-in-out" />
                <div className="black-square absolute top-0 left-0 w-full h-full opacity-0 scale-75 transition-all duration-300 ease-in-out bg-black rounded-sm"></div>
              </div>
              <div style={{ textAlign: 'left', fontSize: '20px', marginBottom: '20px', marginLeft: '20px' }} className="service-text">
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

      {/* ✅ Our Clients Section with Images */}
      <h2 className="section-title clients-title">Our Clients</h2>
      <p className='section-subtext poppins'>We collaborate with forward-thinking brands to craft bold, impactful identities that inspire and connect.

</p>
      <div className="clients-row">
        {clients.map((client, index) => (
          <div className="client-logo" key={index}>
            <img
              src={client.src}
              alt={client.alt}
              style={{ height: '28px', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesPage;
