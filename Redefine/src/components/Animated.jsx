import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Animated = ({title,containerClass}) => {
    const containerref=useRef(null)
    useEffect(()=>{
   const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerref.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
    }, containerref);

    return () => ctx.revert();const stx=gsap.co
    },[])
  return (
     <div ref={containerref}
     className={` flex flex-col gap-1 text-7xl uppercase leading-[0.8] text-white sm:px-32 md:text-[6rem]; ${containerClass}`}>
               {title.split('<br/>').map((line,index)=>(
                <div key={index} className='flex justify-center items-center max-w-full flex-wrap gap-2 px-10 '>
                      {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />))}

                    </div>
               ))}

            </div>
  )
}

export default Animated