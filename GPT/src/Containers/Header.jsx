import React from 'react'

const Header = () => {
  return (
    <div className='gpt_header section_padding flex ' id='home'>
      <div className='gpt_content flex-1 flex justify-center items-start flex-col mr-[5rem]'>
        <h1 className='gradient_text font-bold text-[62px] '>
          Let's Build Something Amazing with GPT-5 OpenAI
        </h1>
        <div className='content text-white'>
          <p className=' text-[20px] font-medium text-[#81AFDD] mt-[1.5rem]'>Experience the most advanced AI-powered platform for your business, education, and creative projects. Fast, intelligent, and reliable.</p>
          <div className='flex w-[100%]'>
          <input type='email' placeholder='Email.com' className='text-[#3D6184] w-[75%]  mt-[1.5rem] bg-[#052D56] font-medium  m-[2rem] flex p-5'/>
          <button className='bg-[#FF4820] font-bold text-white h-[75px] mt-3'>Get Started</button>
          </div>
        </div>
        <div className='people_img flex text-white justify-start items-center mt-[2rem]'>
          <img src='/people.png'/>
          <p className='ml-[2rem]'>1,600 people requested access a visit in last 24 hours</p>
        </div>
        </div>
        <div className='image flex-1 flex justify-center items-center w-[100%] h-[100%] ' >
<img src='/ai.png'/>
        </div>
        
    </div>
  )
}

export default Header