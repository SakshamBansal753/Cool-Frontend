import React from 'react'
import styles from '../style'
import Getstarted from './Getstarted'

const Hero = () => {
  return (
   <section id="home" className={`flex  ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col px-6`}>
        <div className="flex items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient mt-[-12px]" >
          <img src='/src/assets/Discount.svg' alt='logo' className='w-[32px] h-[32px] '/>
          <p className={`${styles.paragraph} text-white/50 ml-2`}>
          <span className='text-white opacity-100 '>20%</span>  Discount for {" "}
        
          <span className='text-white opacity-100'>1 Month</span>  Account
          
          </p>
        </div>
        <div  className='flex justify-between items-center w-full'>
          <h1 className='flex-1 flex-poppins font-semibold text-[52px] text-white ss:leading-[100px] leading-[72px]'>
            The Next <br className='sm:block hidden'/>{" "}
            <span className='text-gradient'>Generation</span>{" "}
            <br/>
            
          </h1>
          <div className=' md:mr-4 mr-0'>
            <Getstarted/>
          </div>
        </div>
        <div>
        <h1 className='flex-1 flex-poppins font-semibold text-[52px] text-white ss:leading-[100px] leading-[72px] w-full'>
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[476px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees.
        </p>
        </div>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} my-10 relative`}>
      <img src="/src/assets/robot.png" className='w-[100%] h-[100%] z-[5] relative'/>
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient '/>
      <div className='absolute z-[1] w-[80%] h-[80%] rounded bottom-40 white__gradient '/>
  
  <div className='absolute z-[0] w-[50%] h-[50%] right-20 blue__gradient '/>
  

    </div>
    

   </section>
  )
}

export default Hero