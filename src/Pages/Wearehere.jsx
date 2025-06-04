import React from 'react'

function Wearehere() {
  return (
    <div className="px-8 py-16 space-y-24 mt-[260vh]">

      {/* Top Paragraph */}
      <div className="text-center max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting.
        </p>
      </div>

      {/* Top Menu */}
      <div className="flex justify-end text-gray-600 text-sm font-medium">
        <span className="mr-2">About us</span>
        <span className="cursor-pointer">MENU</span>
      </div>

      {/* 4 Circles with Text */}
      <div className="flex justify-center gap-10 flex-wrap">
        {Array(4).fill(0).map((_, index) => (
          <div key={index} className="flex flex-col items-center space-y-4 max-w-xs">
            <div className="w-20 h-20 rounded-full bg-gray-300"></div>
            <h3 className="text-xl font-semibold text-gray-700">We are here to</h3>
            <p className="text-center text-sm text-gray-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical literature.
            </p>
          </div>
        ))}
      </div>

      {/* Another Menu */}
      <div className="flex justify-end text-gray-600 text-sm font-medium">
        <span className="mr-2">About P6</span>
        <span className="cursor-pointer">MENU</span>
      </div>

      {/* Enquiry Section */}
      <div className="bg-gray-100 rounded-2xl p-8 space-y-8">
        <div className="flex justify-between text-blue-500 text-sm font-semibold">
          <span className="cursor-pointer">MAKE ENQUIRY</span>
          <span className="cursor-pointer">MAKE ENQUIRY</span>
        </div>
        <h2 className="text-center text-3xl font-bold text-gray-800">MAKE ENQUIRY</h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-28 h-28 rounded-xl bg-white flex items-center justify-center shadow">
            {/* Replace with image */}
            <img src="https://via.placeholder.com/80" alt="Enquiry" />
          </div>
          <p className="text-center text-sm text-gray-600 max-w-xs">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="flex justify-center gap-6 text-blue-500 font-semibold text-sm">
          <span className="cursor-pointer">MAKE ENQUIRY</span>
          <span className="cursor-pointer">MAKE ENQUIRY</span>
        </div>
      </div>

      {/* Last Menu */}
      <div className="flex justify-end text-gray-600 text-sm font-medium">
        <span className="mr-2">services</span>
        <span className="cursor-pointer">MENU</span>
      </div>
    </div>
  )
}

export default Wearehere
