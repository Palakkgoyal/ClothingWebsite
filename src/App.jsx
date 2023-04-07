import React from 'react'
import { Hero, Navbar } from './components'
import styles from './style'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (

    // <Routes>
    //   <Route path="/" element={<Navbar />}/>
    // </Routes>
    <div>
      <div className={`${styles.paddingX}`} >
        <Navbar />
      </div>
      <Hero />
    </div>
  )
}

export default App

