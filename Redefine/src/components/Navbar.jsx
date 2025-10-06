import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { useWindowScroll } from 'react-use'
import { TiLocationArrow } from 'react-icons/ti'
import gsap from 'gsap'
const navItems=['Zone',"Vault","Pros","Contact","About"]
const Navbar = () => {
    const [isAudioplay, setisAudioplay] = useState(false)
    const [isIndicator, setisIndicator] = useState(false)
    const [lastScrolly, setlastScrolly] = useState(0)
    const [isNavVisible, setisNavVisible] = useState(true)
    const navref=useRef(null)
    const audioElementref=useRef()
    const toggleAudio=()=>{
        setisAudioplay((prev)=>!prev)
        setisIndicator((prev)=>!prev)
    }
    const { y:currentScrollY}=useWindowScroll();
    useEffect(()=>{
if(currentScrollY==0){
    setisIndicator(true)
    navref.current.classList.remove('floating-nav')
}else if(currentScrollY>lastScrolly){
    setisNavVisible(false)
       navref.current.classList.add('floating-nav')
}else if(currentScrollY<lastScrolly){
    setisIndicator(true)
    navref.current.classList.add('floating-nav')
}
setlastScrolly(currentScrollY)
    },[currentScrollY])

useEffect(()=>{
    gsap.to(navref,{
        y:isNavVisible?0:-100,
        opacity:isNavVisible?1:0,
        duration:0.2
    })
},[isNavVisible])


    useEffect(()=>{
if(isAudioplay){
    audioElementref.current.play();
}else{
    audioElementref.current.pause()
}
    },[isAudioplay])
  return (
    <div 
    className='fixed inset-x-0 top-0 z-50 h-16 border-none transition-all duration-1000'>
        <header className='absolute top-1/14 w-full translate-y-1/2'>
        <nav ref={navref} className='flex size-full items-center justify-between p-4'>
            <div className='flex items-center gap-7'>
                <img src='/logo.png' className='w-10'/>
           <Button
  id="product-button"
  title="Products"
  leftIcon={<TiLocationArrow className="text-black" />}
  containerClass="!bg-yellow-400 items-center justify-center gap-2 text-black font-bold"
/>

   </div>
   <div className='flex h-full items-center'>
  <div className='hidden md:block'>
  { navItems.map((link)=>(
   <a key={link} href={`#${link.toLowerCase()}`} className='nav-hover-btn'>
    {link}
   </a>
   ))}
  </div>

  <button className='ml-10 flex items-center space-x-0.5'
  onClick={toggleAudio}>
<audio ref={audioElementref}className='hidden' src='/loop.mp3' loop/>
{[1,2,3,4].map((bar)=>(
    <div key={bar} className={`indicator-line ${isIndicator? 'active':''}`}
    style={{animationDelay:`${bar*0.1}s`}}>

    </div>
))}

  </button>
   </div>

        </nav>
        </header>

    </div>
  )
}

export default Navbar