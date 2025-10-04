import React from 'react'
import Article from '../assets/article'

const Blog = () => {
  return (
    <div className='blog section_padding flex flex-col ' id="blog">
      <div className='head w-[100%] text-left mb-[5rem]'>
<h1 className='gradient_text font-bold text-[62px] '>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='flex '>
<div className='blog flex-[0.75] mr-[2rem]'>
<Article imgUrl={"/blog01.png"} date={"22-09-2025"} title={"GPt-5 Is the Future And revolutionaises the world"}/>
</div>
<div className='blog2 flex-1 grid grid-cols-2 gap-[2rem]'>

<Article imgUrl={"/blog02.png"}  date={"22-09-2025"} title={"GPt-5 Is the Future And revolutionaises the world"}/>
<Article imgUrl={"/blog03.png"}  date={"22-09-2025"} title={"GPt-5 Is the Future And revolutionaises the world"}/>
<Article imgUrl={"/blog04.png"}  date={"22-09-2025"} title={"GPt-5 Is the Future And revolutionaises the world"}/>
<Article imgUrl={"/blog05.png"}  date={"22-09-2025"} title={"GPt-5 Is the Future And revolutionaises the world"}/>
</div>
      </div>

    </div>
  )
}

export default Blog