import React from 'react'

const Button = ({className,id,text,onClick}) => {
  const handleClick=(e)=>{
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
     if (id) {
      const target = document.getElementById(id);
      if (target) {
        const offset = window.innerWidth * 0.15;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }
  return (
    <a onClick={handleClick} className={`${className ?? ''} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle"></div>
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Button