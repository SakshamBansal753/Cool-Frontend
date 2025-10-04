import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Buisness from './components/Buisness'
import Billing from './components/Billing'
import Cardeal from './components/Cardeal'

import Clients from './components/Clients'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'


const App = () => {
  return (
    <div className='bg-black w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar/>
        </div>
      </div>
      <div className={`bg-black  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <Hero/>
          </div>     
          
          </div>
           <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
         <Buisness/>
          <Billing/>
          <Cardeal/>
       <Testimonials/>
         <Clients/>
          <CTA/>
         <Footer/>
          </div>     
          
          </div>
    </div>
  )
}

export default App