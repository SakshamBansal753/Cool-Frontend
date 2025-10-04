import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoDivref = useRef([]);
  const videoSpanRef = useRef([]);
  const [loadedData, setLoadedData] = useState([]);
  const [Video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { startPlay, videoId, isPlaying } = Video;

  // GSAP animation on scroll
  useGSAP(() => {
    gsap.to("#slider",{
        transform:`translateX(${-100*videoId}%)`,
        duration:2,
        ease:"power2.inOut"
    })
    gsap.to(".video-slide", {
      scrollTrigger: {
        trigger: ".video-slide",
        toggleActions: "restart none none none",
      },
      onComplete: () =>
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        })),
    });
  }, [videoId]);

  // Pause / Play control
  useEffect(() => {
    if (loadedData.length >= hightlightsSlides.length) {
      if (!isPlaying) {
        videoRef.current[videoId]?.pause();
      } else {
        startPlay && videoRef.current[videoId]?.play();
      }
    }
  }, [startPlay, isPlaying, loadedData, videoId]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "play":
        setVideo((prev) => ({
          ...prev,
          isPlaying: true,
          startPlay: true,
        }));
        break;

      case "pause":
        setVideo((prev) => ({ ...prev, isPlaying: false }));
        break;

      case "video-reset":
        setVideo((prev) => ({
          ...prev,
          videoId: 0,
          isPlaying: true,
          startPlay: true,
          isLastVideo: false,
        }));
        break;

      case "video-end":
        if (i === hightlightsSlides.length - 1) {
          setVideo((prev) => ({
            ...prev,
            isLastVideo: true,
            isPlaying: false,
          }));
        } else {
          setVideo((prev) => ({
            ...prev,
            videoId: i + 1,
            isPlaying: true,
            startPlay: true,
          }));
        }
        break;

      default:
        return Video;
    }
  };

  const handleLoadedData = (i) =>
    setLoadedData((prev) => [...new Set([...prev, i])]); // avoid duplicates

  // GSAP animation on dots
  useEffect(() => {
let currentpro=0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
     let anim= gsap.to(span[videoId], {
       onUpdate:()=>{
        const pro=Math.ceil(anim.progress()*100);
       if(pro!=currentpro){
        currentpro=pro;
        gsap.to(videoDivref.current[videoId],{
            width:window.innerWidth<760?'10vw':'10vw'
        })
       }
       },
        onComplete: () => {
        if(isPlaying){
            gsap.to(videoDivref.current[videoId],{
                width:'12px'
            })
            gsap.to(span[videoId],{
                backgroundColor:"#afafaf"
            })
        }  },
      });
      if(videoId==0){
        anim.restart();
      }
      const animUpdate=()=>{
        anim.progress(videoRef.current[videoId].currentTime/hightlightsSlides[videoId].videoDuration)
      }
      if(isPlaying){
        gsap.ticker.add(animUpdate)
      }else{
        gsap.ticker.remove(animUpdate)
      }
    }
  }, [videoId, startPlay]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]">
              <div className="w-full h-full flex justify-center items-center rounded-3xl overflow-hidden bg-black">
                <video
                  className="video-slide"
                  muted
                  playsInline
                  preload="auto"
                  ref={(el) => (videoRef.current[i] = el)}
                  onLoadedMetadata={() => handleLoadedData(i)}
                  onPlay={() =>
                    setVideo((prev) => ({
                      ...prev,
                      isPlaying: true,
                    }))
                  }
                  onEnded={() =>{{
                    i!==3?handleProcess('video-end',i):
                    handleProcess('video-last')
                  }}}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p key={text} className="text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex justify-center items-center mt-10">
        <div className="flex justify-center items-center py-5 px-7 bg-gray-900 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivref.current[i] = el)}
              className="mx-2 w-3 h-3 rounded-full bg-gray-200 relative cursor-pointer"
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>
        <button className="ml-4 p-4 rounded-full bg-gray-300 backdrop-blur flex-center">
          <img
            src={Video.isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            onClick={
              Video.isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
