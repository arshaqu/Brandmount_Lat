import React from 'react';
import Image1 from '../Assets/Explore.png'
import './Home.css'

function Aboutus() {

  
  return (
    <div className="bg-white h-auto text-black p-12 ">
     

      {/* About Text */}
      <div className="bg-gray-200 py-10 px-6 md:px-20 text-center text-gray-800 leading-relaxed ">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p>It has survived not only five centuries, but also the leap into electronic typesetting.</p>
      </div>

      {/* Explore Section */}
    <div style={{width:'100%'}} className="bg- flex w-[100%] justify-center  text-white py-20    relative overflow-hidden">
  {/* Left Text */}

<div style={{width:'100%'}} className="bg-[#4d3df2] text-white py-20 px-96 md:px-96 ">
  <div className="flex flex-col md:flex-row items-center justify-between gap-10">
    
    {/* Left Content */}
    <div className="max-w-sm text-center md:text-left">
      <h2 className="text-5xl md:text-8xl font-bold text-[#f77f6a] mb-4">explore</h2>
      <p className="text-base md:text-2xl leading-relaxed text-[#f77f6a]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  
      </p>
    </div>

    {/* Right Floating Cards */}
    <div className="relative flex flex-col items-end space-y-10">
      {/* Card 1 */}

<div className="relative w-64 overflow-visible group rounded-2xl shadow-lg cursor-pointer
      transition-shadow duration-300 ease-in-out
      hover:shadow-xl hover:shadow-purple-500/50"
    >
      <img
        src={Image1}
        alt="Image1"
        className="w-full rounded-2xl transition-transform duration-500 ease-in-out
          group-hover:scale-105 group-hover:brightness-110"
      />

      {/* Centered Text with water drop animation */}
      
  <style jsx>{`
        @keyframes smoothBounce {
          0% { transform: scale(1) translateY(0); }
            20% { transform: scale(1.1) translateY(-40px); }
          40% { transform: scale(1.1) translateY(-30px); }
          60% { transform: scale(1.1) translateY(-20px); }
          80% { transform: scale(1.1) translateY(-10px); }
          100% { transform: scale(1.1) translateY(0); }
        }
        
        .bounce-hover:hover {
          animation: smoothBounce 0.9s ease-out;
        }
      `}</style>

      {/* Centered Text with water drop animation */}
<h1 className="bounce-hover absolute inset-0 flex items-center justify-center text-4xl font-bold text-white transition-all duration-300 group-hover:text-5xl group-hover:animate-fade-out-jump from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
  DummyContent
</h1>



      {/* Description wrapper */}
      <div className="absolute bottom-6 left-6 w-[220px] max-w-[180px] overflow-hidden
        transition-all duration-500 ease-in-out
        group-hover:w-[350px] group-hover:max-w-[400px]"
      >
        <p
          className="text-sm leading-relaxed text-white
            whitespace-nowrap transition-all duration-500 ease-in-out
            group-hover:whitespace-normal text-left group-hover:line-clamp-auto"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's dummy text of the printing and typesetting industry. Lorem Ipsum has Done!
        </p>
      </div>
    </div>



 

      {/* Card 2 */}
     <div className="relative w-64 overflow-visible group rounded-2xl shadow-lg cursor-pointer
      transition-shadow duration-300 ease-in-out
      hover:shadow-xl hover:shadow-purple-500/50"
    >
      <img
        src={Image1}
        alt="Image1"
        className="w-full rounded-2xl transition-transform duration-500 ease-in-out
          group-hover:scale-105 group-hover:brightness-110"
      />

      {/* Centered Text with water drop animation */}
      
  <style jsx>{`
        @keyframes smoothBounce {
          0% { transform: scale(1) translateY(0); }
            20% { transform: scale(1.1) translateY(-40px); }
          40% { transform: scale(1.1) translateY(-30px); }
          60% { transform: scale(1.1) translateY(-20px); }
          80% { transform: scale(1.1) translateY(-10px); }
          100% { transform: scale(1.1) translateY(0); }
        }
        
        .bounce-hover:hover {
          animation: smoothBounce 0.9s ease-out;
        }
      `}</style>

      {/* Centered Text with water drop animation */}
<h1 className="bounce-hover absolute inset-0 flex items-center justify-center text-4xl font-bold text-white transition-all duration-300 group-hover:text-5xl group-hover:animate-fade-out-jump from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
  DummyContent
</h1>



      {/* Description wrapper */}
      <div className="absolute bottom-6 left-6 w-[220px] max-w-[180px] overflow-hidden
        transition-all duration-500 ease-in-out
        group-hover:w-[400px] group-hover:max-w-[400px]"
      >
        <p
          className="text-sm leading-relaxed text-white
            whitespace-nowrap transition-all duration-500 ease-in-out
            group-hover:whitespace-normal text-left group-hover:line-clamp-auto"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's dummy text of the printing and typesetting industry. Lorem Ipsum has Done!
        </p>
      </div>
    </div>


      {/* Card 3 */}
     <div className="relative w-64 overflow-visible group rounded-2xl shadow-lg cursor-pointer
      transition-shadow duration-300 ease-in-out
      hover:shadow-xl hover:shadow-purple-500/50"
    >
      <img
        src={Image1}
        alt="Image1"
        className="w-full rounded-2xl transition-transform duration-500 ease-in-out
          group-hover:scale-105 group-hover:brightness-110"
      />

      {/* Centered Text with water drop animation */}
      
  <style jsx>{`
        @keyframes smoothBounce {
          0% { transform: scale(1) translateY(0); }
            20% { transform: scale(1.1) translateY(-40px); }
          40% { transform: scale(1.1) translateY(-30px); }
          60% { transform: scale(1.1) translateY(-20px); }
          80% { transform: scale(1.1) translateY(-10px); }
          100% { transform: scale(1.1) translateY(0); }
        }
        
        .bounce-hover:hover {
          animation: smoothBounce 0.9s ease-out;
        }
      `}</style>

      {/* Centered Text with water drop animation */}
<h1 className="bounce-hover absolute inset-0 flex items-center justify-center text-4xl font-bold text-white transition-all duration-300 group-hover:text-5xl group-hover:animate-fade-out-jump from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
  DummyContent
</h1>



      {/* Description wrapper */}
      <div className="absolute bottom-6 left-6 w-[220px] max-w-[180px] overflow-hidden
        transition-all duration-500 ease-in-out
        group-hover:w-[400px] group-hover:max-w-[400px]"
      >
        <p
          className="text-sm leading-relaxed text-white
            whitespace-nowrap transition-all duration-500 ease-in-out
            group-hover:whitespace-normal text-left group-hover:line-clamp-auto"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's dummy text of the printing and typesetting industry. Lorem Ipsum has Done!
        </p>
      </div>
    </div>
    </div>
  </div>
</div>

</div>

    </div>
  );
}

export default Aboutus;
