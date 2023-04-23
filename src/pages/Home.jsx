import React from 'react'
import { AllSuitCom, Sidebar, HomeBanner } from '../components'

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className='flex'>
        {/* <Sidebar /> */}
        <AllSuitCom />
      </div>
    </div>
  )
}

export default Home
