import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Contact from './Contact'
import About from './About'
import Home from './Home'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route />
        </Routes>

      </Router>


    </div>
  )
}

export default App