import React, { use, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "@/components/title-header";
import { projectData } from "@/constants";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const projectRefs=useRef([]);


   useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  useGSAP(() => {
    projectRefs.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
    
      <div className="w-full">
        <TitleHeader
  title="Featured Projects"
  sub="A Glimpse into My Real-World Creations"
/>
   <div className="grid grid-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
 {/* grid layout */}
      {projectData.map((project, index) => (
        <div
          className="project card-border  rounded-xl"
          key={index}
          ref={el => (projectRefs.current[index] = el)}
        >
          <div className=" h-65 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-xl" />
          </div>
          <div className="p-4">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="text-white-50 md:text-base mt-2">{project.description}</p>
           <div className="flex gap-4 mt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-md border border-white hover:bg-white hover:text-black transition duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-md border border-white hover:bg-white hover:text-black transition duration-300"
                  >
                    GitHub
                  </a>
                </div>
                </div>
        </div>
      ))}
    </div> 
      </div>
    </section>
  );
};

export default Projects;
