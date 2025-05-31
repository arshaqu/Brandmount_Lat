import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Contactus() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-20 space-y-10">
      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-bold text-center">Contact Us</h1>

      {/* About Brief */}
      <p className="text-lg md:text-xl max-w-2xl text-center text-gray-300 leading-relaxed">
        We are passionate about making better, high-quality t-shirts that not only look good but feel great.
        Our mission is to deliver style and comfort with every product we create. Get in touch with us — we'd love to connect!
      </p>

      {/* Social Links */}
      <div className="flex space-x-6 mt-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-3xl transition">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-3xl transition">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-3xl transition">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-3xl transition">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-3xl transition">
          <FaGithub />
        </a>
      </div>

      {/* Contact Details */}
      <div className="text-center mt-10 space-y-2 text-gray-400">
        <p>Email: <a href="mailto:contact@yourdomain.com" className="hover:text-white">contact@yourdomain.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="hover:text-white">+1 234 567 890</a></p>
        <p>Location: Your City, Country</p>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 text-sm text-center mt-20">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
}

export default Contactus;
