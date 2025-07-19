import { socialImgs } from '@/constants'
import React from 'react'

const Footer = () => {
  return (
   <footer className='footer'>
  <div className='footer-container'>
   <div className='flex flex-col justify-center items-center md:items-start'>
    <a href="/">Visit my blog </a>
    </div> 
    <div className='socials'>
      {socialImgs.map((img)=>(
        <a className='icon' target="_blank" href={img.url} key={img.url}><img src={img.imgPath}/></a>
      ))}
    </div>
    <div className='flex flex-col justify-center'>
<p className='text-center md:text-end'>{new Date().getFullYear()} Pallavi Singh. All rights reserved</p>
    </div>
    </div>  
   </footer>
  )
}

export default Footer