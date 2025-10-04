import React from 'react'
import styles, { layout } from '../style'

const Billing = () => {
  return (
   <section id='product' className={`${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
<img src="/src/assets/bill.png" className='w-[100%] h-[100%] relative z-[5]'/>
<div  className='absolute z-[3] top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient'/>
<div  className='absolute z-[0] bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient'/>
    </div>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Easily Control your<br/> billing & Invoices
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Easily manage your billing and invoicing with powerful tools designed to save time and reduce errors. Automate recurring payments, track expenses in real-time, and generate professional invoices in just a few clicks. With everything in one place, you’ll stay organized and always in control of your finances.

    </p>
    <div className='flex flex-wrap mt-6'>
<img src='/src/assets/apple.svg' className='w-[1208x] h-[42px] object-contain mr-5 cursor-pointer'/>
<img src='/src/assets/google.svg' className='w-[1208x] h-[42px] object-contain  cursor-pointer'/>
 
    </div>
    </div>
   </section>
  )
}

export default Billing