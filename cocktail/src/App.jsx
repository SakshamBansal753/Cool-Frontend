import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger,SplitText} from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
import Footer from './components/Footer'
gsap.registerPlugin(ScrollTrigger,SplitText) //make this plugins  to use globally
const App = () => {
  return (
   <main>
     <Navbar/>
     <Hero/>
    <Cocktails/>
    <About/>
    <Art/>
    <Menu/>
    <Footer/>
   </main>
  )
}

export default App
