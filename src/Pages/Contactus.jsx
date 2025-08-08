import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Contactus() {
  return (
    <div>
      <Header/>
    <div className="min-h-auto px-4 md:px-12 py-12 bg-white text-black">
      {/* Section Heading */}
      <h2 style={{fontWeight:'bold'}} className="text-2xl text-blue-700 mb-8 text-center md:text-left poppin ">Contact Us</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
<div className=' poppin'>
  <h3 className="font-semibold md:text-left mb-4">Talk to an Expert</h3>
  <form className="space-y-6"> {/* Increased spacing between rows */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" placeholder="First Name" className="border px-4 py-4 w-full" />
      <input type="text" placeholder="Last Name" className="border px-4 py-4 w-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="email" placeholder="Email" className="border px-4 py-4 w-full" />
      <input type="tel" placeholder="Phone" className="border px-4 py-4 w-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" placeholder="Required Services" className="border px-4 py-4 w-full" />
      <input type="text" placeholder="Company Name" className="border px-4 py-4 w-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" placeholder="Your Website" className="border px-4 py-4 w-full" />
      <input type="text" placeholder="How did You Find Us" className="border px-4 py-4 w-full" />
    </div>

    <textarea placeholder="Message" className="border px-4 py-4 w-full h-32 resize-none" />

    <button
      type="submit"
      className="bg-white text-blue-700 border border-blue-700 px-6 py-3 font-semibold hover:bg-blue-700  hover:text-white transition"
    >
      SUBMIT NOW
    </button>
  </form>
</div>



        {/* Contact Info and Map */}
        <div className='text-left poppin'>
          <h1 className="font-semibold mb-4">Our Location</h1>
          <div className="text-sm space-y-3">
            <p>
              <strong>Email</strong><br />
              <a href="mailto:info@brandconcur.in" className="text-gray-700 hover:text-blue-700">info@brandconcur.in</a>
            </p>
            <p>
              <strong>Address</strong><br />
              5th Floor, Hilite Business Park, Poovangal,<br />
              Pantheerankavu, Kerala 673014
            </p>
            <p>
              <strong>Phone</strong><br />
              <a href="tel:8129732160" className="text-gray-700 hover:text-blue-700">8129732160</a>
            </p>
          </div>

          {/* Google Map */}
          <div className="mt-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2767.0342060867933!2d75.83398396952617!3d11.2483701041741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bbe46a8961d%3A0x2c97366363820a6d!2sHiLITE%20Business%20Park%2C%205th%20floor%20Hilite%20Business%20Park%2C%20Poovangal%2C%20Pantheeramkavu%2C%20Kerala%20673014!5e0!3m2!1sen!2sin!4v1753866544248!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded shadow"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
      <Footer/>

    </div>
  );
}

export default Contactus;
