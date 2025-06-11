import React from 'react'
import Header from '../Components/Header'
import BgRemovalSteps from '../Components/BgRemovalSteps'
import BgSlider from '../Components/BgSlider'
import Pricing from '../Components/Pricing'
import Testimonials from '../Components/Testimonials'
import Trynow from '../Components/Trynow'

const Home = () => {
  return (
    <div className='max=w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-["Outfit]'>
       
        <Header/>
        <BgRemovalSteps/>
        <BgSlider/>
        <Pricing/>
        <Testimonials/>
        <Trynow/>

      
      
      
    </div>
  )
}

export default Home
