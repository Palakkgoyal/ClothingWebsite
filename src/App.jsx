import React from 'react'
import { Home, AllSuits } from './pages'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AllSuits />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

