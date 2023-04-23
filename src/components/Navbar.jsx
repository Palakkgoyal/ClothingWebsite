import React from 'react'
import logo from '../assets/logo.png'
import styles from '../style'
// import { CiMenuKebab } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs"
import { BiHome } from "react-icons/bi"
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();

  return (
    <nav className='flex justify-between items-center border-b-[2px] shadow-gray-400 pb-2 w-full'>
      <div className={`${styles.flexCenter} pt-3`}>
        <img src={ logo }
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
        {
          isAuthenticated ? (
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
          )
         : (
              <button onClick={() => loginWithRedirect()}>Log In</button>
            )
        }
       {isAuthenticated && <h1>Welcome { user.name } </h1>}
      </div>
      
    </nav>
  )
}

export default Navbar
