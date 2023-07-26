import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './component/Navbar'


const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>



    </div>
  )
}

export default App

