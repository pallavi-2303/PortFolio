import React, { useEffect, useRef, useState } from "react";
import { DiCssdeck } from "react-icons/di";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Header = () => {
const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
const menuRef = useRef();
 useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <header className="bg-gray-900 text-white px-4 py-4 border-b ">
      <div className=" w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center col-span-1 md:col-span-1">
          <a href="/">
            <span className="flex items-center text-white text-2xl font-bold cursor pointer">
              <DiCssdeck size="2.5rem" className="mr-2" />
              PortFolio
            </span>
          </a>
        </div>
        
        {/* Navigation Links */}
       <ul className="hidden md:flex justify-around col-span-3 md:col-span-3 gap-10">
     <li><a href="#internships" className="text-gray-300 transition font-semibold text-2xl hover:text-white ">Internships</a></li>
       <li><a href="#projects"  className="text-gray-300 transition font-semibold text-2xl hover:text-white">Projects</a></li>
         <li><a href="#technologies"  className="text-gray-300 transition font-semibold text-2xl hover:text-white">Technologies</a></li>
           <li><a href="#about"  className="text-gray-300 transition font-semibold text-2xl hover:text-white">About</a></li>
        </ul> 
            {/* Social Icons */}
        {/* Right Side Icons + Hamburger */}     
<div className="flex items-center gap-4">
  
          <a
            href={"https://github.com/pallavi-2303"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:bg-gray-800 p-2 rounded-full transition transform hover:scale-110"
          >
            <AiFillGithub size="2rem" />
          </a>
 <a
            href={"https://www.linkedin.com/in/pallavi-singh-8241a7255"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:bg-gray-800 p-2 rounded-full transition transform hover:scale-110"
          >
            <AiFillLinkedin size="2rem" />
          </a>


  {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>
     </div>
      {isMobileMenuOpen && (
        <div ref={menuRef}
 className="md:hidden  mt-2 mx-4 bg-gray-800 rounded-2xl shadow-xl p-4 text-base font-medium space-y-2 animate-fade-in ">
          <a href="#internships" className="block py-2 border-b-1 border-gray-700 text-gray-300 hover:text-white">Internships</a>
          <a href="#projects" className="block py-2 border-b-1 border-gray-700 text-gray-300 hover:text-white">Projects</a>
          <a href="#technologies" className="block py-2 border-b-1 border-gray-700 text-gray-300 hover:text-white">Technologies</a>
          <a href="#about" className="block py-2 border-b-1 border-gray-700 text-gray-300 hover:text-white">About</a>
        </div>
      )}
    </header>
  );
};

export default Header;
