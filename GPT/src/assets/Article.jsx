import React from 'react'

const Article = ({imgUrl,date,title}) => {
  return (
    <div className='article w-[100%] h-[100%] flex flex-col '>
      <div className='img w-[100%] h-[100%]'>
<img src={imgUrl} className='w-[100%] h-[100%]'/>
      </div>
      <div className='co flex flex-col justify-between px-[1rem] py-[1.5rem] h-[100%]'>
    <div>
      <p className='font-bold text-[11px] text-white'>{date}</p>
      <h3 className='font-[800] text-[26px] text-white mb-[5rem]'>{title}</h3>
    </div>
    <p className='cursor-pointer font-bold text-[11px] text-white'>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article