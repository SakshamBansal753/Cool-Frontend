import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [VideoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
const smallHeroVideo="video/smallHero.mp4"
  const heroVideo="video/hero.mp4"
  // Handle window resize to switch video
  const handleResize = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // GSAP animations
  useGSAP(() => {
    gsap.to(".hero", { opacity: 1, delay: 1.5 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 1.5 });
  }, []);

  return (
    <section className="w-full h-[calc(100vh-60px)] bg-black relative">
      <div className="h-5/6 w-full flex flex-col justify-center items-center">
        {/* Hero Text */}
        <p className="hero text-center font-semibold text-3xl text-gray-300 opacity-0 max-md:mb-10">
          iPhone 15 Pro
        </p>

        {/* Video */}
        <div className="md:w-10/12 w-9/14">
          <video
            className="pointer-events-none w-full"
            autoPlay
            muted
            playsInline
            loop
            key={VideoSrc} // ensures video reloads on source change
          >
            <source src={VideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* CTA */}
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a
          href="#highlights"
          className="rounded-2xl bg-blue-600 px-6 py-8 my-7 hover:bg-transparent border border-transparent hover:border hover:text-blue-400 hover:border-blue-600"
        >
          Buy
        </a>
        <p className="font-normal text-xl text-white">
          From 2100/month or 22000
        </p>
      </div>
    </section>
  );
};

export default Hero;
