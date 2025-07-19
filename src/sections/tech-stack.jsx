import TechIcon from "@/components/models/techlogos/tech-icon";
import TitleHeader from "@/components/title-header";
import { techStackIcons, techStackImgs } from "@/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Tech Stacks"
          sub="The Skills I Bring to The Table"
        />
        <div className="tech-grid">
          {techStackImgs.map((icon) => (
            <div
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              key={icon.name}
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                 <img src={icon.imgPath}/>
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
