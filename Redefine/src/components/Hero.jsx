import React, { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
    const [CurrentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, sethasClicked] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const [loadedVideos, setloadedVideos] = useState(0)
    const totalvideos=4
    const nextVidRef=useRef(null)
const handlevideoLoaded=()=>{
    setloadedVideos((prev)=>prev+1)
}
const upcomingvidindex=(CurrentIndex%totalvideos)+1;
    const handleminivideoClick=()=>{
        sethasClicked(true)
        setCurrentIndex(upcomingvidindex)
    }
const getVideosrc = (index) => `/hero-${index}.mp4`;
 useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVidRef.current.play(),
          
        });
      
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          opacity:0,
          delay:1.5,
          duration: 2,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [CurrentIndex],
      revertOnUpdate: true,
    }
  );
  useGSAP(()=>{
    gsap.set('#video-frame',{
        clipPath:'polygon(14% 0%,72% 0%,90% 90%,0% 100%)',
        borderRadius:'0 0 40% 10%'

    })
    gsap.from('#video-frame',{
      clipPath:'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
      borderRadius:'0 0 0 0',
      ease:"power1.inOut",
      scrollTrigger:{
        trigger:"#video-frame",
        start:'center center',
        end:'bottom center',
        scrub:true,
      }
    })
  })
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-100"
      >
     <div>

        <div 
       
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 size-64 cursor-pointer overflow-hidden rounded-lg mask-clip-path flex items-center justify-center ">
       <div
       onClick={handleminivideoClick}
       className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 bg-white/50 ">
        <video ref={nextVidRef}
        src={getVideosrc(upcomingvidindex)} loop muted id="current-video" className="size-64   origin-center object-cover object-center " onLoadedData={handlevideoLoaded}/>
       </div>
        </div>
        <video ref={nextVidRef}
        src={getVideosrc(CurrentIndex)}
        loop muted id="next-video" className="  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] invisible absolute z-20 size-64 object-cover object-center"
        onLoadedData={handlevideoLoaded}
        />
        <video
        src={getVideosrc(CurrentIndex===totalvideos-1?1:CurrentIndex)}
        autoPlay
        id="mv"
        loop muted className="absolute left-0 top-0 size-full object-cover object-center "
        onLoadedData={handlevideoLoaded}/>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100">
        G<b>a</b>ming
      </h1>
      <div className="absolute left-0 top-[-11px] z-40 size-full">
        <div className="mt-24 px-5">
            <h1 className="special-font hero-heading text-white">
                redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                Enter The Metagame Layer<br/>
                Unleash the Play,Economy
            </p>
            <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow /> } containerClass="!bg-yellow-300 flex-center gap-1" />
        </div>

      </div>
      </div>
       <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;

