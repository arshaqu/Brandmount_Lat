import React from 'react';

function Service() {
  const services = [
    'personal branding',
    'social advertising',
    'social advertising',
    'E-commerce solutions',
    'media production',
    'web development',
    'web development',
    'web development'
  ];

  return (
    <div className="max-w-md mx-auto p-6">
      {services.map((service, index) => (
        <div key={index} className="border-b border-gray-200 py-4 text-gray-700 font-light tracking-wide text-base">
          {service}
        </div>
      ))}

      <div className="text-center text-xs mt-6 tracking-widest text-orange-400 cursor-pointer hover:underline">
        SEE ALL
      </div>
    </div>
  );
}

export default Service;
