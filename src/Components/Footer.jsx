import React from 'react'
import { assets, footerConstants } from '../assets/assests'

const Footer = () => {
  return (
    <div>
        <footer className='flex item-center justify-between gap-4 px-4 lg:px-44 py-3'>
            <img src={assets.logo} alt="logo" width={32} />
            <p className='flex-1 border-l border-gray-100 max-sm:hidden'>
                &copy;{new Date().getFullYear() }@backgroundRemover | All rights reserved.

            </p>
            <div className='flex gap-3'>
                {
                    footerConstants.map((item, index)=>(
                        <a href={item.url} key={index} target="_blank">
                            <img src={item.logo} alt="logo" width={32} />
                        </a>
                    ) )
                }

            </div>

        </footer>
       
    </div>
  )
}

export default Footer
