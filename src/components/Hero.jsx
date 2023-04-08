import React from 'react'
import heroImg from '../assets/heroImg.png'
import heroImgWithoutBg from '../assets/heroImgWithoutBg.png'
import CTA from './CTA'
import duppata from '../assets/duppata.png'
import styles from '../style'

const Hero = () => {
  return (
    <div className='mt-5 flex h-[100vh] w-[100vw] text-white'>

      <div className={`w-full h-[100vh] bg-center bg-no-repeat bg-cover px-4 sm:px-12 md:hidden`}
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${heroImg}')` }}
      >
        <div className='mt-24 mb-10 sm:mt-44 sm:mx-auto'>
          <h1 className='font-[Poppins] text-3xl max-w-[400px] sm:text-4xl'>Elevate your style with our handpainted suits for any event</h1>
        </div>
        <div>
          <CTA text="View Suits" />
        </div>
      </div>

      
      <div className={`hidden md:flex px-16 justify-end flex-row`}>
        <div className='flex flex-col'>
          <h1 className='relative font-[poppins] text-5xl text-black font-semibold max-w-[430px] z-10 mt-14 mb-9  lg:max-w-[700px] lg:mt-28 leading-snug'
            style={{ textShadow: '2px 1px black' }}
          ><i>Elevate style with our handpainted suits for any event </i></h1>
          <div className="hidden lg:block">
          <CTA text="Find Your Perfect Ethnic Look" />
          </div>
          <div className='lg:hidden'>
          <CTA text="View Suits" />
          </div>
        </div>
        <div className='flex max-w-[300px] lg:max-w-[400px]'>
          <img src={heroImgWithoutBg} alt="Beautiful girl wearing yellow coloured hand painted suit"
            className='lg:ml-11' />
        </div>
      </div>
    </div>
  )
}

export default Hero
