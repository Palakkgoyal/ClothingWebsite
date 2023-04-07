import React from 'react'
import heroImg from '../assets/heroImg.webp'
import CTA from './CTA'

const Hero = () => {
  return (
    <div className='mt-5 flex h-[100vh] w-[100vw] text-white'>
      <div className={`w-full h-[100vh] bg-center bg-no-repeat bg-cover`}
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${heroImg}')` }}
      >
        <div className='px-4 my-24'>
          <h1 className='font-[Poppins] text-3xl'>Elevate your style with our handpainted suits for any event</h1>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero
