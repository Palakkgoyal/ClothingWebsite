import React from 'react'
// import { Navbar } from './components'
import { AboutUs, Home, SuitDetail, CommonNav, ContactPage } from './pages'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonNav />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path="/suit-customization" element={<ContactPage />} />
          <Route path='/all-suits/:id'element={<SuitDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

