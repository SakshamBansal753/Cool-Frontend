import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger,SplitText} from 'gsap/all'
import Navbar from './components/navbar'
import Hero from './components/Hero'
gsap.registerPlugin(ScrollTrigger,SplitText) //make this plugins  to use globally
const App = () => {
  return (
   <main>
     <Navbar/>
     <Hero/>
     <div className='h-dvh bg-black'/>
   </main>
  )
}

export default App