import React from 'react'

const Feature = ({title,text}) => {
  return (
    <div className='gpt5_f1_f2 w-[100%] flex flex-wrap justify-between items-start m-[1rem]'>
      <div className='gpt-f-contnt flex-1 max-w-[180px] mr-[2rem]' >
        <div />
        <h1 className='font-[800] text-[18px] w-[130px] text-white border-t-1 border-purple-600'>{title}</h1>

      </div>
      <div className='feture-text flex justify-center items-center  w-[540px] text-[#81AFDD] mt-5 '>{text}</div>
    </div>
  )
}

export default Feature