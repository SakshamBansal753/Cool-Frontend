import React from 'react'

const Footer = () => {
  return (
    <div className='footer section_padding flex text-white flex-col justify-center items-center '>
      <div className='w-[100%] text-center mb-[3rem]'>
      <h1 className='gradient_text font-[800] text-[62px] text-center'>
        Do you want to step in to the future before others
      </h1>
      </div>
      <div className='btn mb-[10rem] textcenter cursor-pointer'>
        <p className='text-[18px] border-white p-[15px] border-2 '>Request Access</p>
      </div>
      <div className='footer_links flex justify-between items-start flex-wrap w-[100%] text-left'>
      <div className='logos flex flex-col  w-[250px] m-[1rem]'>
<img src='/logo.svg' className='w-[118px] h-[30px] mb-[1rem]'/>
<p className='text-[12px]'>All rrights reserved</p>
      </div>
      <div className='divs w-[250px] m-[1rem] flex justify-start flex-col '>
    <h4 className='text-[14px] mb-[1rem]'>Links</h4>
    <p className='text-[12px] mb-[0.5rem] font-medium cursor-pointer'>Overons</p>
    <p className='text-[12px] mb-[0.5rem] font-medium cursor-pointer'>About</p>
    <p className='text-[12px] mb-[0.5rem] font-medium cursor-pointer'> Social</p>
    <p className='text-[12px] mb-[0.5rem] font-medium cursor-pointer'>Contacts</p>
      </div>
       <div className='divs w-[250px] m-[1rem] flex justify-start flex-col'>
    <h4 className='text-[14px] mb-[1rem]'>Companies</h4>
    <p className='text-[12px] mb-[0.5rem] font-medium cursor-pointer '>Terms & Conditions</p>
    <p className='text-[12px] mb-[0.5rem] font-medium cursor-pointer'>Privacy Policy</p>
    
    <p className='text-[12px] mb-[0.5rem] font-medium cursor-pointer'>Contacts</p>
      </div>
       <div className='divs w-[250px] m-[1rem] flex justify-start flex-col'>
    <h4 className='text-[14px] mb-[1rem]'>Get in Touch</h4>
    
    <p className='text-[12px] mb-[0.5rem] font-medium cursor-pointer'> Number</p>
    <p className='text-[12px] mb-[0.5rem] font-medium cursor-pointer'>Contacts</p>
      </div>
      </div>
      <div className='mt-[2rem] text-center w-[100%]'>
<p className='text-[12px] '>2025 Gpt-5. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  )
}

export default Footer