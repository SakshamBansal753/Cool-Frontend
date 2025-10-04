import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"


const Highlights = () => {
 useGSAP(()=>{
    gsap.to("#title",{
        opacity:1,
        y:0,
        delay:1
    })
    gsap.to(".link",{
        opacity:1,
        y:0,
        delay:1,
        duration:1,
        stagger:0.25
    })
 })
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc-950 screen-max-width'>
<div>
    <div className="mb-12 w-full items-end flex justify-between">

    <h1  id='title' className='text-gray-600 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20'>
        Get The Highlights.

    </h1>
    <div className="flex flex-wrap items-end gap-5">
<p className="link text-blue-600 hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20">Watch The Film
    <img src={watchImg} className="ml-2"/>
</p>
<p className="link text-blue-600 hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20">Watch The Event
    <img src={rightImg} className="ml-2"/>
</p>
    </div>
    </div>
    <VideoCarousel/>
</div>
    </section>
  )
}

export default Highlights