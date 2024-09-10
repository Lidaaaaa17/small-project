import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Search from './components/Search.jsx'
import Car from './components/Car.jsx'
import About from './components/About.jsx'
import Review from './components/Review.jsx'
import Login from './components/Login.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Search/>
    <Car/>
    <About/>
    <Review/>
    <Login/>
    <Footer/>
  </div>
  )
}

export default App
