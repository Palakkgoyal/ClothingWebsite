import React from 'react'
import logo from '../assets/logo.png'
import styles from '../style'
import { CiMenuKebab } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className={`${styles.flexCenter} justify-between pt-4`}>
        <div className={`${styles.flexStart} flex-col`}>
            <img src={logo} 
                alt="kiratFloral"
                className='w-14'
             />
            <div className={`font-[Inspiration] font-extrabold`}>kiratFlorals</div>
        </div>
        <div className='pt-3'>
            <CiMenuKebab className='h-8 w-8' />
        </div>
    </nav>
  )
}

export default Navbar
