import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'

const Cardeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Fond of a better card deal <br/>in few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
    Compare the best credit card offers side by side and choose the one that matches your lifestyle. From rewards and cashback to low-interest rates, finding the right deal has never been this simple.
        </p>
      <Button styles="mt-10 rounded-[10px]"/>
      </div>
      <div className={layout.sectionImg}>
    <img src="/src/assets/card.png" className='w-[100%] h-[100%] z-[5]'/>
    <div  className='absolute z-[3] top-0 -right-1/2 w-[50%] h-[50%] rounded-full white__gradient'/>
<div  className='absolute z-[0] bottom-0 -right-1/2 w-[50%] h-[50%] rounded-full pink__gradient'/>
  
      </div>
      
    </section>
  )
}

export default Cardeal