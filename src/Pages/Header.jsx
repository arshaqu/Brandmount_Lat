import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import BLogos from '../Assets/BrandBLogo.png'


function Header() {
    const location = useLocation()
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
   <header className="flex flex-wrap items-center justify-between px-6 py-4 bg-gray-50 top-0 z-50 relative">
  {/* Logo */}
  <div className="text-5xl md:text-9xl ml-24 font-semibold poppins text-black">
  <a href="/">
     <img
      src={BLogos}
      alt="Logo"
      className="h-16 md:h-32 w-auto"
    />
  </a>
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
    <a style={{ letterSpacing: '2px' }} href="/" className="hover:text-gray-400">
      HOME
    </a>
    <a
      style={{ letterSpacing: '2px' }}
      href="/aboutus"
      className={`hover:text-gray-400 ${location.pathname === '/aboutus' ? 'text-gray-400' : ''}`}
    >
      ABOUT US
    </a>
    <a style={{ letterSpacing: '2px' }} href="/brand-strategy" className="hover:text-gray-400">
      SERVICE
    </a>
    <a style={{ letterSpacing: '2px' }} href="/careers" className="hover:text-gray-400">
      CAREERS
    </a>


    {/* CONTACT US Button for mobile only */}
    <div className="block md:hidden">
      <button
        className="relative z-10 overflow-hidden border border-black px-5 py-3 text-black duration-200
                   before:absolute before:inset-0 before:z-[-1] before:bg-black before:translate-x-[-100%]
                   before:transition-transform before:duration-300 hover:before:translate-x-0 hover:text-white"
      >
        CONTACT US
      </button>
    </div>
  </nav>

  {/* CONTACT US Button for desktop only */}
<a
  href="/contact"
  style={{ letterSpacing: '2px' }}
  className="hidden md:block text-lg font-semibold text-black mt-4 md:mt-0 w-full md:w-auto text-center md:text-right 
             relative z-10 overflow-hidden border border-black px-5 py-3 text-black duration-200
             before:absolute before:inset-0 before:z-[-1] before:bg-black before:translate-x-[-100%]
             before:transition-transform before:duration-300 hover:before:translate-x-0 hover:text-white"
>
  CONTACT US
</a>

</header>

  )
}

export default Header
