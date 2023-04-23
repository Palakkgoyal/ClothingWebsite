import React from 'react'
import { slider1, slider2, slider3, slider4 } from '../assets'

const HomeBanner = () => {
  return (
    <div className='slider lg:w-[850px] lg:h-[500px] rounded-lg'>
      <div className='slides w-[500%] h-full flex overflow-hidden'>
        <input type="radio" name="radio-btn" id="radio1" className='hidden' />
        <input type="radio" name="radio-btn" id="radio2" className='hidden' />
        <input type="radio" name="radio-btn" id="radio3" className='hidden' />
        <input type="radio" name="radio-btn" id="radio4" className='hidden' />

        <div className='slide w-1/5 first'>
          <img src={ slider1 } alt="" />
        </div>
        <div className='slide w-1/5'>
          <img src={ slider2 } alt="" />
        </div>
        <div className='slide w-1/5'>
          <img src={ slider3 } alt="" />
        </div>
        <div className='slide w-1/5'>
          <img src={ slider4 } alt="" />
        </div>

        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>

        <div className="navigation-manual">
          <label htmlFor="radio1" className='manual-btn'></label>
          <label htmlFor="radio2" className='manual-btn'></label>
          <label htmlFor="radio3" className='manual-btn'></label>
          <label htmlFor="radio4" className='manual-btn'></label>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
