import React from 'react'
import { Hero, Navbar, Suits, Facilities, Videos, Follow } from '../components'
import styles from '../style'

const AboutUs = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <Suits />
      <Facilities />
      <Videos />
      <Follow />
    </div>
  )
}

export default AboutUs
