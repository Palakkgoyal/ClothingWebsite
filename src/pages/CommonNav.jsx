import React from 'react'
import { Navbar } from '../components'
import styles from '../style'

const CommonNav = () => {
  return (
    <div>
       <div className={`${styles.paddingX}`} >
        <div className={`${styles.boxWidth} mx-auto`}>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default CommonNav
