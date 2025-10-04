import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'
import { features } from '../constants'
const FeatureCard=({icon,title,content,index})=>{
  return(
<div className={`flex p-6 rounded-[20px] hover:bg-blue-500/50 ${index!==features.length-1 ? "mb-6":"mb-0"} `}>
  <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-blue-300/50`}>
    <img src={icon} className='w-[50%] h-[50%] object-contain'/>
  </div>
  <div className='flex-1 flex flex-col ml-3'>
    <h4 className='font-semibold text-white text-[18px] mb-1 leading-[23px]'>
      {title}
    </h4>
    <p className='font-normal text-white/50 text-[16px] mb-1 leading-[24px]'>
      {content}
    </p>

  </div>
</div>
  )
}
const Buisness = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          You do the buisness,<br className='hidden sm:block'/> we'll 
          Hande the money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index)=>(
          <FeatureCard key={feature.id}{...feature} index={index}/>
        ))}

      </div>
    </section>
  )
}

export default Buisness