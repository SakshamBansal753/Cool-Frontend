import React from 'react'
import styles from '../style'
import { stats } from '../constants'

const Stats = () => {
  return (
   <section className={`${styles.flexCenter} flex flex-wrap mb-6`}>
    {stats.map((stat)=>(
      <div key={stat.id} className={` flex-1 flex justify-start items-center flex-row-3 `}>
        <h4 className='font-semibold font-poppins text-[30px] leading-[43px] text-white'>{stat.value}</h4>
        <p className='font-normal font-poppins text-[15px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
      </div>
    ))}
 
   </section>
  )
}

export default Stats