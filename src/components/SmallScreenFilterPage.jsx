import React from 'react'
import { BsCaretDownFill } from "react-icons/bs";

const SmallScreenFilterPage = () => {
  return (
    <div className='flex justify-between lg:hidden '>
      <a href="">KiratFlorals</a>
      <div>Filters<BsCaretDownFill /></div>
    </div>
  )
}

export default SmallScreenFilterPage
