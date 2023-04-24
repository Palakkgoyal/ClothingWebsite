import React from 'react'
import { AllSuitCom, Sidebar, HomeBanner, SmallScreenFilterPage } from '../components'
import styles from '../style'

const Home = () => {
  return (
    <div className={`w-full ${ styles.flexCenter }`}>
      <div className={`flex flex-col justify-center items-center ${ styles.boxWidth }`}>
        <HomeBanner />
        <div className='flex flex-col lg:flex-row'>
          <SmallScreenFilterPage />
          <Sidebar />
          <AllSuitCom />
        </div>
      </div>
    </div>
  )
}

export default Home
