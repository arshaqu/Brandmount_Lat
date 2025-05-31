import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import Menu from './Menu';
import Aboutus from './Aboutus';

function HomePage() {
  const [headerText, setHeaderText] = useState('CONTACT');
  const menuRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderText('MENU');
        } else {
          setHeaderText('CONTACT');
        }
      },
      {
        threshold: 0.2, // 20% visible triggers the swap
      }
    );

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }

    // cleanup
    return () => {
      if (menuRef.current) {
        observer.unobserve(menuRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header className="flex flex-wrap justify-between items-center px-6 py-4 sticky top-0 bg-gray-50 z-50">
        <div className="text-5xl md:text-9xl font-semibold poppins text-black">B</div>
        <nav className="flex flex-wrap gap-6 md:gap-12 text-sm font-bold text-black poppinsx mt-4 sm:mt-0">
          <a style={{letterSpacing:'2px'}} href="#" className="hover:text-gray-400">HOME</a>
          <a style={{letterSpacing:'2px'}} href="#aboutus" className="hover:text-gray-400">ABOUT US</a>
          <a style={{letterSpacing:'2px'}} href="#" className="hover:text-gray-400">SERVICE</a>
          <a style={{letterSpacing:'2px'}} href="#" className="hover:text-gray-400">PROJECTS</a>
          <a href="#" className="hover:text-gray-400">CONTACT US</a>
        </nav>
        <div style={{letterSpacing:'2px'}} className="text-lg font-semibold text-black mt-4 sm:mt-0">
          {headerText}
        </div>
      </header>

      {/* Main Content */}
      <main>
             <section id="menu" className="px-6 sm:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-12 poppins">
              <div style={{letterSpacing:'3px'}} className="text-9xl font-semibold text-black leading-none poppinsx">the</div>
              <div className="space-y-2 text-4xl poppins text-start">
                <div className="text-gray-500">Personal branding</div>
                <div className="text-gray-500">agency</div>
                <div className="text-gray-500">in kerala</div>
              </div>
              <div className="md:text-8xl font-light text-black">↓</div>
            </div>

            {/* Middle Column */}
            <div className="space-y-8 poppins md:mt-24">
              <div className="text-lg md:text-3xl text-gray-400">Brand Strategy</div>
              <div style={{letterSpacing:'3px'}} className="text-9xl poppinsx text-black leading-none">identity</div>
              <div className="space-y-6">
                <div className="text-lg md:text-3xl text-gray-400">Brand Innovation</div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="text-lg md:text-3xl poppins text-gray-400">Brand Transfomation</div>
              <div className="text-lg md:text-3xl poppins md:ml-[-296px] text-gray-400 mt-12">Brand Innovation</div>
              <div className="text-lg md:text-3xl poppins md:ml-[196px] text-gray-400 mt-12">Brand Design</div>

              <div className="poppins md:mt-48">
                <div className="text-lg md:text-3xl text-gray-400">Brand Transformation</div>
                <div className="md:text-9xl mt-0 text-7xl poppinsx text-black leading-none">expert</div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu component section */}
        <section id="menu-component" ref={menuRef}>
          <Menu />
        </section>

        {/* About us */}
        <section id="aboutus">
          <Aboutus />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
