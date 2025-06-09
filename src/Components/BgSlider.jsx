import React, { useState } from 'react'
import { categories } from '../assets/assests';

const BgSlider = () => {
const [sliderPosition,setSliderPosition]=useState(50);
const [activeCategory,setActiveCategory]=useState("People");
const handleSliderChange=(e)=>{
    setSliderPosition(e.target.value);
}


  return (
    <div className='mb-16 relative'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center'>

        </h2>
        <div className='flex justify-center mb-10 flex-wrap'>
             <div className="inline-flex gap-4 bg-gray-100 p-2 rounded-full flex-wrap justify-center">
                {
                    categories.map((category) => (
                        <button 
                            key={category} 
                            className={`px-6 py-2 rounded-full font-medium ${activeCategory == category ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {
                                category
                            }                            
                        </button>
                    ))
                }
            </div>

        </div>
        
      
    </div>
  )
}

export default BgSlider
