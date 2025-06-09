import React, { useState } from 'react';
import { assets, categories } from '../assets/assests';

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCategory, setActiveCategory] = useState("People");

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value)); // convert to number!
  };

  return (
    <div className='mb-16 relative'>
      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center'>
        {/* Add title here if you want */}
      </h2>

      <div className='flex justify-center mb-10 flex-wrap'>
        <div className="inline-flex gap-4 bg-gray-100 p-2 rounded-full flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium ${
                activeCategory === category
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className='relative w-full max-w-4xl overflow-hidden m-auto rounded-xl shadow-lg' style={{ aspectRatio: '16 / 9' }}>
        <img
          src={assets.people_org}
          alt="Original Image"
          className="w-full h-full object-cover block"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` // clip right side inversely
          }}
        />
        <img
          src={assets.people}
          alt="Alt pic"
          className='absolute top-0 left-0 w-full h-full object-cover'
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)` // clip left side by slider
          }}
        />
        <input
          type="range"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
          min={0}
          max={100}  // change max to 100 to represent percentage
          step={1}
          onChange={handleSliderChange}
          value={sliderPosition}
        />
      </div>
    </div>
  );
};

export default BgSlider;
