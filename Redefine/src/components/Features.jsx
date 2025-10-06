import React from 'react'
import Card from './Card'
import { TiLocationArrow } from 'react-icons/ti'

const Features = () => {
  return (
 <section className='bg-black pb-52'>
    <div className='container mx-auto px-3 '>
<div className='px-5 py-32'>
    <p className='font-circular-web text-lg text-blue-100 '>
        Into the Metagame Layer
    </p>


<p className='max-w-md font-circular-web text-blue-50 opacity-50  '>
    Step boldly into the Metagame—where play meets strategy and every decision shapes your journey. Redefine your game, unlock new possibilities, and embrace the challenge that awaits beyond the ordinary
</p>
</div>
   
    <div className='border border-white/20 relative mb-7 h-96  w-full overflow-hidden rounded-md '>
<Card src="/feature-1.mp4" title={
    <><b>radi<b>n</b>t</b></>}
    description="Connect seamlessly across platforms, trade and play across worlds, and experience a universe that’s fully interoperable"
    isComingSoon={true}/>
    </div>
    <div className='grid h-[155vh] grid-cols-2 grid-rows-3 gap-7'>
        <div className='relative row-span-2  overflow-hidden rounded-md transition-transform duration-300 ease-out'>
<Card src="/feature-2.mp4" title={
    <><b>Z<b>i</b>gma</b></>}
     description="Connect seamlessly across platforms, trade and play across worlds, and experience a universe that’s fully interoperable"
    isComingSoon={true}/>
   
    
        </div>
        <div className='relative  col-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 ms-32'>
<Card src="/feature-3.mp4" title={
    <><b>V<b>i</b>Xel</b></>}
     description="Connect seamlessly across platforms, trade and play across worlds, and experience a universe that’s fully interoperable"
    isComingSoon={true}/>
        </div>
          <div className='relative   overflow-hidden rounded-md transition-transform duration-300 ease-out me-14 col-span-1'>
<Card src="/feature-4.mp4" title={
    <><b>A<b>Z</b>Ure</b></>}
     description="Connect seamlessly across platforms, trade and play across worlds, and experience a universe that’s fully interoperable"
    isComingSoon={true}/>
        </div>
        <div className='relative   overflow-hidden rounded-md transition-transform duration-300 ease-out'>
            <div className='flex size-full flex-col justify-between bg-violet-700 p-5'>
                <h1 className='special-font max-w-64 text-black uppercase md:text-6xl text-4xl  font-zentry font-[1000]'>
                    <b>M</b>ore Co<b>m</b>ing <b>S</b>oon!
                </h1>
                <TiLocationArrow className='m-5 scale-[5] self-end'/>

            </div>
        </div>
        <div className='relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out'>
            <video src='/feature-5.mp4'loop muted autoPlay className='size-full object-cover object-center'/>
        </div>
    </div>
    </div>

 </section>
  )
}

export default Features