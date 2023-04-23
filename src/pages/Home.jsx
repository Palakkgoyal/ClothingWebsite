import React from 'react'
import { AllSuitCom, Sidebar, HomeBanner } from '../components'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <HomeBanner />
      <div className='flex'>
        {/* <Sidebar /> */}
        <AllSuitCom />
      </div>
    </div>
  )
}

export default Home
