import React from 'react'
// import { Navbar } from './components'
import { AboutUs, Home, SuitDetail, CommonNav, ContactPage } from './pages'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
       <CommonNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path="/suit-customization" element={<ContactPage />} />
        <Route path='/all-suits/:id'element={<SuitDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

