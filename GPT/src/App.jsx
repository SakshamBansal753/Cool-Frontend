import React from 'react'
import Navbar from './assets/Navbar'
import Header from './Containers/Header'
import Brand from './assets/Brand'
import WhatGPT5 from './Containers/whatGPT5'
import Feature from './assets/Feature'
import Features from './Containers/Features'
import Possibility from './Containers/Possibility'
import CTA from './assets/CTA'
import Blog from './Containers/Blog'
import Footer from './Containers/Footer'
import "./App.css"
const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
    <Navbar/>
    <Header/>
      </div>
      <Brand/>
    <WhatGPT5/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
     
    </div>
  )
}

export default App