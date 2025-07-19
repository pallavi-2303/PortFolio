import React from "react";
import { resumeUrl, words } from "../constants/index";
import Button from "../components/button";
import HeroExperience from "../components/heroModel/hero-experience";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import AnimatedCounter from "../components/animated-counter";
const Hero = () => {
    const handleClickResume = () => {
    window.open(resumeUrl, "_blank");
  };
  useGSAP(()=>{
    gsap.fromTo('.hero-text h1',{
    y:50,
    opacity:0  
    },{
      y:0,
      opacity:1,
      stagger:0.2,
      duration:1,
      ease:"power2.inout"
    })
  })
  return (
    <section id="hero" className="relative overflow-hidden ">
      <div className="absolute top-0 left-0 z-10 mb-20 ">
        <img
          src="/images/bg.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="hero-layout">
        {/* left content hero */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 mt-24">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h3>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h3>
              <h3>into Real Projects</h3>
              <h3>that Deliver Results</h3>
            </div>
            <p className="text-white-50 md:text-3xl relative z-10 pointer-events-none">
          Hello, I am Pallavi Kumari
            </p>
       <p className="text-white-50 md:text-xl relative z-10 pointer-events-none max-w-3xl leading-relaxed mt-0">
  A passionate Full Stack Developer skilled in React.js, Next.js, Node.js, TypeScript, JavaScript, Three.js, and modern web technologies — crafting dynamic, responsive, and user-focused applications.
</p>


            <Button
              className="md:w-80 md:h-16 w-60 h-12"
          onClick={handleClickResume}
              text="See My Resume"
            />
          </div>
        </header>
        {/* right 3d image */}
        <figure>
          {" "}
          <div className="hero-3d-layout hidden lg:block ">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter/>
    </section>
  );
};

export default Hero;
