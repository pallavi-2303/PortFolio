import { navLinks } from '@/constants'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
const [scrolled, setScrolled]=useState(false);
useEffect(()=>{
const handleScroll=()=>{
const isScrolled=window.scrollY >10;
setScrolled(isScrolled);
}
window.addEventListener('scroll',handleScroll)
return ()=>window.removeEventListener('scroll',handleScroll);
}
,[])
  return (
   <header className={`navbar ${scrolled ? 'scrolled' :'not-scrolled'}`}>
    <div className='inner'>
<a className='logo_name mb-2' href="#hero">
 <svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="48" stroke="#ffffff" strokeWidth="4" fill="#1e1e1e" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dy=".35em"
      fontSize="48"
      fill="#ffffff"
      fontFamily="Arial, sans-serif"
    >
      P
    </text>
  </svg>
</a>
<nav className='desktop'>
<ul>
  {navLinks.map(({link,name})=>(
 <li key={name} className='group'>
  <a href={link}>
  <span>{name}</span>
  <span className='underline'></span>
  </a>
 </li> 
  ))}
</ul>
</nav>
<a className='contact-btn group' href="#contact">
  <div className='inner' >
    <span>Contact me</span>
  </div>
   </a>
    </div>
   </header>
  )
}

export default Navbar