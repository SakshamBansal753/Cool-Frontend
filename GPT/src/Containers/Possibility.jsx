import React from 'react'

const Possibility = () => {
  return (
    <div className='5_possibility section_padding flex ' id='possibility'>
      <div className='image_di flex-1 flex justify-start items-center mr-[2rem]'>
        <img src="/possibility.png" className='w-[100%] h-[100%]'/>
        </div>
        <div className='Gpt_possible_content flex-1 flex flex-col justify-end items-start m-[4rem] '>
          <h4 className='font-[500] text-[16px] text-[#71E5FF] mt-[-50px]'>
            Request For Early Access
          </h4>
          <h1 className='gradient_text font-[800] text-[34px] '>
            It is The possibilities Beyond Imaginations
          </h1>
          <p className='text-[16px] text-[#81AFDD]'>The “beyond imagination” part is that we’re only scratching the surface. Tomorrow’s applications might be things we can’t even picture yet.</p>
          <h4 className='font-[500] text-[16px] text-[#FF8A71]'>Access is needed or not</h4>
        </div>
    </div>
  )
}

export default Possibility