import React from 'react'

const Navbar = () => {
  return (
  <div className='gpt_5navbar flex justify-  items-center px-[6rem] py-[2rem] '>
    <div className='gpt5_navbar_link flex-1 flex justify-start items-center'>
    <div  className='logo mr-[2rem] '>
    <img  src='/logo.svg' alt='logo' className='w-[62px] h-[16.02px]'/>
    </div>
    <div className='gpt_5_container flex text-white font-bold  gap-5'>
      <p className='text-[18px] ml-[5rem] cursor-pointer'>
        <a href='#home'>Home</a>
      </p>
       < p className='text-[18px] ml-[3rem] cursor-pointer'>
        <a href='#wgpt3'>What is GPT5?</a>
      </p>
       <p className='text-[18px] ml-[3rem] cursor-pointer'>
        <a href='#possibility'>Open AI</a>
      </p>
       <p className='text-[18px] ml-[3rem] cursor-pointer'>
        <a href='#features'>Case Studies</a>
      </p>
       <p className='text-[18px] ml-[3rem] cursor-pointer'>
        <a href='#blod'>Library</a>
      </p>
    </div>
    </div>
    <div className='gpt5_sign1 flex text-white gap-4'>
    <p className='flex items-center h-[56px]'>
      Sign in
    </p>
    <button type='button' className='w-[152px] h-[56px] bg-[#FF4820] font-bold border-0 outline-0 cursor-pointer'>SignUp</button>
    </div>
  </div>
  )
}

export default Navbar