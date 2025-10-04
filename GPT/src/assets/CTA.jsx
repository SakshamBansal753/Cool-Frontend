import React from 'react'

const CTA = () => {
  return (
    <div className='cta flex justify-between items-center p-[2rem] m-[4rem] rounded-sm '>
      <div className='cta_content '>
        <p className='font-[500px] text-[12px] text-[#0E0E0E]'>Request Early Access to Get Started</p>
        <h3 className='font-[800] text-[24px] text-black'>Register today & start exploring the endless possiblities.</h3>
        </div>
        <div className='cta-btn flex justify-center items-center ml-[2rem] text-white'>
<button className='bg-black rounded-[40px] font-bold text-[18px] px-[0.5rem] py-[1rem]  cursor-alias outline-0 '> Get Started</button>
        </div>
    </div>
  )
}

export default CTA