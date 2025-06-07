import React from 'react'
import { assets } from '../assets/assests';

const Header = () => {
  return (
     <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16'>
         <div className="order-2 md:order-1 flex justify-center">
            <div className='shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden'>
                <video src={assets.video_banner } autoPlay loop  muted className='w-full max-w-[400px] h-auto object-cover'/>
             
            </div>

        </div>
        <div className='order-1 md'>

        </div>

    </div>
  )
}

export default Header;
