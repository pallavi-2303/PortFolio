import BackGroundImage from "@/components/background";
import { resumeUrl } from "@/constants";
import React from "react";

const Home = () => {
  const handleClickResume = () => {
    window.open(resumeUrl, "_blank");
  };
  return (
    <section className=" w-screen h-screen bg-gray-900 flex flex-col md:flex-row items-center justify-between p-6 md:p-12 relative overflow-hidden text-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 z-10 text-center md:text-left p-10">
        <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-4 p-6 mt-6">
          Hello! <br />
        <span> I'm Pallavi Singh</span> 
        </h1>
      <div className="space-y-4 text-lg text-gray-400 font-sm md:text-3xl mb-6 p-4">
  <p>A Full Stack Developer with expertise in building scalable web applications using Next.js and TypeScript.</p>
  <p>Proficient in optimizing website performance and enhancing SEO.</p>
  <p>Experienced in integrating advanced analytics tools and implementing user engagement features.</p>
</div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button
            onClick={handleClickResume}
            className=" w-full md:w-auto px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500  to-pink-500  text-white font-semibold rounded-full hover:opacity-90 transition"
          >
            Resume
          </button>
        </div>
      </div>
      <div className=" hidden md:block absolute right-0 top-0 h-full w-full md:w-1/2 pointer-events-none z-0">
      <BackGroundImage/>
      </div>
      </section>

     
    
  );
};

export default Home;
