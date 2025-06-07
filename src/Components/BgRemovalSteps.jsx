import React from 'react'
import { steps } from '../assets/assests'

const BgRemovalSteps = () => {
  return (
    <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-old text-gray-900-12 '>
            How to remove a background?


        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {steps.map((step,index)=>(
                <div>

                    
                </div>
            ))}


            
          

          
        </div>

   
    </div>
  )
}

export default BgRemovalSteps
