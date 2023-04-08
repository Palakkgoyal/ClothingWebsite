import React from 'react'
import logo from '../assets/logo.png'
import styles from '../style'
import { CiMenuKebab } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center border-b-[2px] shadow-gray-400 pb-2 w-full'>
      <div className='pt-5'>
        <CiMenuKebab className='h-8 w-8' />
      </div>

      <div className={`${styles.flexCenter} pt-3`}>
        <img src={logo}
          alt="kiratFloral"
          className='w-16'
        />
      </div>

      <div className='pt-5'>
        <BsCart4 className='h-8 w-8'/>
      </div>
    </nav>
  )
}

export default Navbar
