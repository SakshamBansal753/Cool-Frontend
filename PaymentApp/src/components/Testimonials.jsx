import React from 'react'
import styles, { layout } from '../style'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
<div/>
<div className='w-full flex justify-between items-center flex-row  mb-6 relative z-[1] '>
  <h1 className={`${styles.heading2} ml-9`}> What People are<br/> saying about us</h1>
  <div className='w-full mt-6'>
    <p className={`${styles.paragraph} text-left max-w-[450px] `}>
      Everything you need to accept card payments and grow your business anywhere on the planet.
    </p>
  </div>
</div>
<div className='flex flex-wrap justify-center w-full  feedback-container relative z-[1]'>
  {feedback.map((feedback)=>(
    <FeedbackCard key={feedback.id} {...feedback}/>
  ))}

</div>
  </section>
  )
}

export default Testimonials