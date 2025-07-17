import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import Menu from './Menu';
import Wearehere from './Wearehere';
import Service from './Service';
import Ourworks from './Ourworks';

import VisionMission from './VisionMission';
import Footer from './Footer';

import BLogos from '../Assets/BrandBLogo.png'

function HomePage() {
  const [headerText, setHeaderText] = useState('CONTACT');

  const sectionIds = ['contact', 'menu', 'wearehere', 'aboutus' , 'service'];
   const [menuOpen, setMenuOpen] = useState(false);

  const idToHeaderText = {
    contact: 'CONTACT',
    menu: 'MENU',
    wearehere: 'WE ARE HERE',
    aboutus: 'ABOUT US',
    service : 'SERVICE'
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
     <header className="flex flex-wrap items-center justify-between px-6 py-4 bg-gray-50 top-0 z-50 relative">
      {/* Logo */}
     <div className="text-5xl md:text-9xl ml-24 font-semibold poppins text-black">
  <img
    src = {BLogos} // Replace with your actual image path
    alt="Logo"
    className="h-16 md:h-32 w-auto"
  />
</div>

      {/* Hamburger Button - visible only on mobile */}
      <button
        className="md:hidden text-2xl text-black"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row gap-4 md:gap-12 text-sm font-bold text-black poppinsx mt-4 md:mt-0 w-full md:w-auto`}
      >
        <a style={{ letterSpacing: '2px' }} href="#" className="hover:text-gray-400">
          HOME
        </a>
        <a style={{ letterSpacing: '2px' }} href="#aboutus" className="hover:text-gray-400">
          ABOUT US
        </a>
        <a style={{ letterSpacing: '2px' }} href="#" className="hover:text-gray-400">
          CAREERS
        </a>
        <a style={{ letterSpacing: '2px' }} href="#" className="hover:text-gray-400">
          SERVICE
        </a>
        <a style={{ letterSpacing: '2px' }} href="#" className="hover:text-gray-400">
          PROJECTS
        </a>
        <a style={{ letterSpacing: '2px' }} href="#" className="hover:text-gray-400">
          WORKS
        </a>
  
      </nav>

      {/* Right-side Text */}
      <div
        style={{ letterSpacing: '2px' }}
        className="text-lg font-semibold text-black mt-4 md:mt-0 w-full md:w-auto text-center md:text-right"
      >
   <button
  className="relative z-10 overflow-hidden border border-black px-5 py-3  text-black  duration-200
             before:absolute before:inset-0 before:z-[-1] before:bg-black before:translate-x-[-100%] before:transition-transform before:duration-300
             hover:before:translate-x-0 hover:text-white"
>
  CONTACT US
</button>

      </div>
    </header>

      {/* Main Content */}
      <main>
        <section id="menu" className="px-6 sm:px-12 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-12 poppins">
              <div style={{ letterSpacing: '3px' }} className="md:text-9xl text-5xl font-semibold text-black leading-none poppins">The</div>
              <div className="md:text-8xl poppinsx font-light text-black">↓</div>
              <div className="space-y-2 text-4xl poppins text-start">
               <div className="text-gray-500 max-w-[170px] break-words whitespace-normal leading-snug ml-48 poppin">
  Personal branding agency in Kerala
</div>

              
              </div>
            </div>

            {/* Middle Column */}
            <div className="space-y-8 poppins md:mt-24">
              <div style={{ letterSpacing: '3px' }} className="md:text-9xl text-5xl poppins text-black leading-none">identity</div>
             
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

             <section id="ourworks">
          <Footer />
        </section>

      </main>
    </div>
  );
}

export default HomePage;
