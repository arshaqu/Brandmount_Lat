import React, { useEffect, useState } from 'react';
import './Home.css';
import Menu from './Menu';
import Wearehere from './Wearehere';
import Service from './Service';
import Ourworks from './Ourworks';
import VisionMission from './VisionMission';
import Footer from './Footer';
import Header from './Header';

function HomePage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const section = document.getElementById('menu');
    if (section) {
      section.addEventListener('mouseenter', () => setCursorVisible(true));
      section.addEventListener('mouseleave', () => setCursorVisible(false));
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom Cursor */}
      {cursorVisible && (
        <div
        
          className="custom-cursor poppins"
          style={{
            fontSize:'15px',
            letterSpacing:'3px' ,
            transform: `translate3d(${cursorPosition.x + 15}px, ${cursorPosition.y + 15}px, 0)`,
          }}
        >
          SAY HELLO
        </div>
      )}

      {/* Sticky Header */}
      <Header />

      {/* Main Content */}
      <main>
        <a
  href="https://wa.me/8282822836"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <section id="menu" className="px-6 sm:px-12 py-6 cursor-none">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
      {/* Left Column */}
      <div className="space-y-12 poppins">
        <div
          style={{ letterSpacing: '3px' }}
          className="md:text-9xl text-7xl font-semibold text-black leading-none poppins"
        >
          The
        </div>
        <div className="md:text-8xl text-7xl poppinsx font-light text-black">↓</div>
        <div className="space-y-2 text-4xl poppins text-start">
          <div className="text-gray-500 max-w-[170px] break-words whitespace-normal leading-snug md:ml-48 ml-32 poppin">
            Personal branding agency in Kerala
          </div>
        </div>
      </div>

      {/* Middle Column */}
      <div className="space-y-8 poppins md:mt-24">
        <div
          style={{ letterSpacing: '3px' }}
          className="md:text-9xl text-7xl poppins text-black leading-none"
        >
          identity
        </div>
      </div>

      {/* Right Column */}
      <div>
        <div className="poppins md:mt-48">
          <div className="text-lg md:text-3xl text-gray-400">Brand Transformation</div>
          <div className="md:text-9xl mt-0 text-7xl poppins text-black leading-none">expert</div>
        </div>
      </div>
    </div>
  </section>
</a>


        <section id="menu-component">
          <Menu />
        </section>

        <section id="wearehere">
          <Wearehere />
        </section>

        <section id="aboutus" style={{ padding: 0, margin: 0 }}>
          <VisionMission />
        </section>

        <section id="service">
          <Service />
        </section>

        <section id="ourworks">
          <Ourworks />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
