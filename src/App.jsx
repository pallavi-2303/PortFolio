import { useState } from 'react'
import Header from './components/header'
import Layout from './layout/layout'
import Home from './pages/home'
import Hero from './sections/hero-section'
import Projects from './sections/projects-section'
import Navbar from './components/navbar'
import LogoSection from './sections/logo-section'
import FeaturedCard from './sections/featured-card'
import ExperienceSection from './sections/experience-section'
import TechStack from './sections/tech-stack'
import Contact from './sections/contact'
import Footer from './components/footer'
import Achievement from './sections/achievement'
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Projects/>
    <LogoSection/>
    {/* <FeaturedCard/> */}
   
    <ExperienceSection/>
     <Achievement/>
    <TechStack/>
    <Contact/>
    <Footer/>
   </>
  )
}

export default App
