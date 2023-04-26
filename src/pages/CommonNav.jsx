import React from 'react'
import { Navbar, FilterCom } from '../components'
import styles from '../style'
import { Outlet } from 'react-router-dom'

const CommonNav = () => {
  return (
    <>
    <FilterCom />
       <div className={`${styles.paddingX}`} >
        <div className={`${styles.boxWidth} mx-auto`}>
          <Navbar />
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default CommonNav
