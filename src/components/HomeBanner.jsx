import React from 'react'
import { slider1, slider2, slider3, slider4 } from '../assets'

const HomeBanner = () => {
  // var counter = 1;
  // setInterval(() => {
  //   document.getElementById('radio' + counter).checked = true;
  //   counter++;
  //   if(counter > 4){
  //     counter = 1;
  //   }
  // }, 5000)

  return (
    <div className='slider lg:w-[850px] lg:h-[500px] rounded-lg'>
      <div className='slides lg:w-[500%] h-full flex overflow-hidden relative'>
        <input type="radio" name="radio-btn" id="radio1" className='hidden' />
        <input type="radio" name="radio-btn" id="radio2" className='hidden' />
        <input type="radio" name="radio-btn" id="radio3" className='hidden' />
        <input type="radio" name="radio-btn" id="radio4" className='hidden' />

        <div className='slide w-1/5 first duration-[2s]'>
          <img src={ slider1 } alt="" className='lg:w-[800px] lg:h-[500px]' />
        </div>
        <div className='slide w-1/5 duration-[2s]'>
          <img src={ slider2 } alt="" className='lg:w-[800px] lg:h-[500px]' />
        </div>
        <div className='slide w-1/5 duration-[2s]'>
          <img src={ slider3 } alt="" className='lg:w-[800px] lg:h-[500px]' />
        </div>
        <div className='slide w-1/5 duration-[2s]'>
          <img src={ slider4 } alt="" className='lg:w-[800px] lg:h-[500px]' />
        </div>

        <div className="navigation-auto absolute flex w-[800px] justify-center mt-[446px]">
          <div className="auto-btn1 border-[2px] border-[#DF74CF] p-[5px] rounded-lg duration-1000 mr-10"></div>
          <div className="auto-btn2 border-[2px] border-[#DF74CF] p-[5px] rounded-lg duration-1000 mr-10"></div>
          <div className="auto-btn3 border-[2px] border-[#DF74CF] p-[5px] rounded-lg duration-1000 mr-10"></div>
          <div className="auto-btn4 border-[2px] border-[#DF74CF] p-[5px] rounded-lg duration-1000"></div>
        </div>

        <div className="navigation-manual absolute lg:w-[800px] bottom-[40px] flex justify-center">
          <label htmlFor="radio1" className='manual-btn border-[2px] border-[#DF74CF] p-[5px] rounded-xl cursor-pointer duration-1000 mr-10 hover:bg-[#DF74CF]'></label>
          <label htmlFor="radio2" className='manual-btn border-[2px] border-[#DF74CF] p-[5px] rounded-xl cursor-pointer duration-1000 mr-10 hover:bg-[#DF74CF]'></label>
          <label htmlFor="radio3" className='manual-btn border-[2px] border-[#DF74CF] p-[5px] rounded-xl cursor-pointer duration-1000 mr-10 hover:bg-[#DF74CF]'></label>
          <label htmlFor="radio4" className='manual-btn border-[2px] border-[#DF74CF] p-[5px] rounded-xl cursor-pointer duration-1000 hover:bg-[#DF74CF]'></label>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
