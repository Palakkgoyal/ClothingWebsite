import React from 'react'
import { Hero, Navbar, Suits, Facilities, Videos, Follow } from '../components'
import styles from '../style'

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX}`} >
        <div className={`${styles.boxWidth} mx-auto`}>
          <Navbar />
        </div>
      </div>
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

export default Home
