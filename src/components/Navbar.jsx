import React from 'react'
import logo from '../assets/logo.png'
import styles from '../style'
// import { CiMenuKebab } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs"
import { BiHome } from "react-icons/bi"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center border-b-[2px] shadow-gray-400 pb-2 w-full'>
      <div className={`${styles.flexCenter} pt-3`}>
        <img src={logo}
          alt="kiratFloral"
          className='w-16'
        />
      </div>

      <div className='pt-5 flex'>
        <div className='rounded-full hover:bg-[#D3D3D3] h-14 w-14 flex justify-center items-center cursor-pointer'>
          <BiHome className='h-8 w-8' />
        </div>
        <div className='rounded-full hover:bg-[#D3D3D3] h-14 w-14 flex justify-center items-center cursor-pointer '>
          <BsCart4 className='h-8 w-8' />
        </div>
      </div>

    </nav>
  )
}

export default Navbar
