import { counterItems } from "@/constants";
import React from "react";
import CountUp from "react-countup";
const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg md:mt-12 mt-32">
         <div className="mx-auto grid-4-cols">
     
       
          {counterItems.map((item) => (
             <div className="bg-zinc-900  rounded-lg p-10 flex flex-col justify-center shadow-2xl">
        {" "}
            <div className="counter-number text-white text-5xl font-bold mb-2">
            
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
              </div>
          ))}
          
      
      </div>
    </div>
  );
};

export default AnimatedCounter;
