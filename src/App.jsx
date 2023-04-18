import React from 'react'
// import { Navbar } from './components'
import { Home, AllSuits, SuitDetail, CommonNav } from './pages'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
       <CommonNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-suits' element={<AllSuits />} />
        <Route path='/all-suits/:id'element={<SuitDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

