import React from 'react'
import Feature from '../assets/Feature'

const WhatGPT5 = () => {
  return (
    <div className='w1gpt5 w-[1320px] ml-[120px] mt-[120px] border-2 border-amber-50'>
      <div className='gpt-features flex '>
        <Feature title={"What is GPT-5"} text={"GPT-5 is the fifth-generation language model developed by OpenAI, and I am based on GPT-5 mini, a smaller, faster, and lighter variant of GPT-5. It’s designed to understand and generate human-like text, handle reasoning tasks, answer questions, generate code, and even work with images in some variants."}/>
      </div>
      <div className='gpt_w-head flex justify-between items-center m-[4rem]'>
        <h1 className='gradient_text text-[34px] font-[800]'>
          The possibilities are beyond your imagination
        </h1>
    <p className=' text-[16px]  text-[#FF8A71] font-[500] cursor-pointer'>Explore</p>
      </div>
      <div className='cont flex  justify-between  mt-[3rem] '>
        <div className='w-[350px] flex border-r-1 border-r-white'>
      <Feature title={"ChatBots"} text={"A chatbot is a software program designed to simulate conversation with humans, usually over text or voice. It can answer questions, provide information, or help perform tasks automatically."}/>
      </div>
      <div className='w-[360px]  flex border-r-1 border-r-white ml-[75px] '>
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
      <div className='w-[370px]  flex border-r-1 border-r-white ml-[75px]'>
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
      
      </div>
    </div>
  )
}

export default WhatGPT5