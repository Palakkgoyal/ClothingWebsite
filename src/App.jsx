import React from 'react'
import { Hero, Navbar, Divider } from './components'
import styles from './style'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (

    // <Routes>
    //   <Route path="/" element={<Navbar />}/>
    // </Routes>
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX}`} >
        <div className={`${styles.boxWidth} mx-auto`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default App

