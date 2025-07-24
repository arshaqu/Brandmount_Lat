import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Service from '../../Assets/Aboutuss.jpg'

function Aboutus() {
  return (
    <div>
       <Header/>
<section className="bg-white py-10 px-4 sm:px-6 md:px-12 font-poppins">
  <h2 className="text-4xl text-gray-400  mb-6 sm:mb-8 poppins text-left">About us</h2>

  <div className="bg-[#f8eee3] p-6 sm:p-8 md:p-10 rounded-md grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column */}
    <div className="text-left">
    <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-3 poppins p-4">
  BrandMount The Identity Expert Pvt Ltd
</h3>

      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 poppin ">
        India’s No.1 Comprehensive Branding Concept!
      </p>
    </div>

    {/* Right Column */}
    <div className="text-left text-gray-700 text-base leading-relaxed md:leading-loose space-y-6 max-w-prose poppin">
      <p>
        At BrandMount, we are redefining the branding landscape by setting
        modern trends and crafting powerful brand identities. As a leader in
        comprehensive branding solutions, we empower individuals, products, and
        organizations to establish their unique presence, ensuring they stand
        out as trendsetters and industry leaders.
      </p>
      <p>
        Our expertise spans brand strategy, corporate identity, digital
        branding, legal brand infrastructure, PR, and automated sales funnels,
        offering a 360-degree approach to branding. Whether you are an
        entrepreneur, an emerging business, or an established corporation,
        BrandMount ensures that your brand is impactful, future-ready, and
        influential.
      </p>
    </div>
  </div>
</section>
  <div>
    <img src={Service} alt="" />
  </div>


       <Footer/>
      
    </div>
  )
}

export default Aboutus
