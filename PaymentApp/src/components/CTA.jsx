import React from 'react'
import Button from './Button'
import styles from '../style'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-row black-gradient`}>
      <div className='flex-1 flex-col flex'>
        <h2 className={styles.heading2}>
          Let's Try the Services Now
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your buisness anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} ml-0  mt-10`}>
        <Button styles="rounded-[12px]"/>
      </div>
    </section>
  )
}

export default CTA