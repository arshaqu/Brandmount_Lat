import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion'; // ✅ import Framer Motion

function S6() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const services = [
    {
      title: 'Brand Strategy & Corporate Identity',
      description: 'Build an Iconic Brand That Stands the Test of Time.',
      path: '/brand-strategy'
    },
    {
      title: 'Digital Marketing & Social Advertising',
      description: 'Reach your audience through SEO, PPC & social media.',
      path: '/digital-marketing'
    },
      {
      title: 'Personal Branding & Leadership Positioning',
      description: 'Position yourself as a leader in your niche.',
      path: '/personal-branding'
    },
       {
      title: 'Web Development & E-Commerce',
      description: 'Build responsive websites and powerful online stores.',
      path: '/web-development'
    },
   {
      title: 'Sales Automation & Funnel Development',
      description: 'Optimize your sales journey with automated funnels.',
      path: '/sales-funnelng'
    },
  ];

  const handleRedirect = (path) => {
    navigate(path);
  };

  // Check screen size
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll only on desktop
  useEffect(() => {
    if (!isDesktop) return;

    const container = scrollRef.current;
    const scrollAmount = 320;

    let scrollInterval = setInterval(() => {
      if (container) {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollTo({ left: 0, behavior: 'auto' });
        }
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [isDesktop]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}  // From top with fade
      animate={{ y: 0, opacity: 1 }}     // Animate to visible
      exit={{ y: 100, opacity: 0 }}      // When exiting, slide down and fade
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Header />

      {/* Service Header */}
      <section className="bg-white py-10 px-4 sm:px-6 md:px-12 font-poppins">
        <h2 className="text-4xl text-gray-400 mb-6 sm:mb-8 poppins text-left">Service</h2>

        <div className="bg-[#f8eee3] p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left">
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-3 poppins p-4">
              Professional Media Production


            </h3>
            <p className="text-lg md:text-2xl text-gray-700 poppin">
             Visuals That Speak. Stories That Stay.
            </p>
          </div>

          <div className="text-left text-gray-700 text-base leading-relaxed md:leading-loose space-y-6 max-w-prose poppin">
            <p>
Visuals that captivate. Stories that stay. We produce stunning, high-quality content — from cinematic videos to compelling brand stories — that stir the senses, engage the soul, and bring your brand’s vision to vivid life.            </p>
<button
  onClick={() => navigate('/contact')}
  className={`relative z-10 overflow-hidden border border-black px-5 py-3 text-black duration-200
    ${isDesktop ? `
      before:absolute before:inset-0 before:z-[-1] before:bg-black before:translate-x-[-100%]
      before:transition-transform before:duration-300 hover:before:translate-x-0 hover:text-white
    ` : ''}
  `}
>
  ENQUIRE NOW
</button>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-4">
        <div
          ref={scrollRef}
          className={`${
            isDesktop
              ? 'overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide'
              : 'grid grid-cols-1 sm:grid-cols-2 gap-6'
          }`}
        >
             <div className={`${isDesktop ? 'inline-flex gap-12' : 'grid w-full gap-6'}`}>
            {(isDesktop ? [...services, ...services] : services).map((service, index) => (
             <div
              key={index}
              onClick={() => handleRedirect(service.path)}
              className="group min-w-[300px] min-h-[200px] w-full cursor-pointer bg-white shadow-lg p-6 relative overflow-hidden transition-all duration-300 hover:bg-[#f8eee3] flex flex-col items-center justify-center text-center border-2 border-black hover:border-[#F8EEE3]"
            >
                <div className="absolute top-4 right-4 text-gray-300 text-xl font-bold poppins">
                  {String((index % services.length) + 1).padStart(2, '0')}
                </div>

                <div className="flex items-center md:p-[45px] gap-2 mb-4 justify-center">
                  <div className="relative w-[24px] h-[24px]">
                    <MdOutlineArrowOutward className="absolute top-0 left-0 text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 rounded-sm"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-black poppins ml-4">
                    {service.title}
                  </h4>
                </div>

                <p className="text-sm text-gray-600 poppins mt-2 group-hover:text-black transition-all duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}

export default S6
