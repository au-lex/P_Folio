import React from 'react'
import Header from '../Componet/Header'
import Hero from '../Componet/Hero'
import AboutMe from '../Componet/About'
import SkillSet from '../Componet/Skill'
import Footer from "../Componet/Footer"
import Projects from '../Componet/Projects'
import LoaderWithTimeout from '../Componet/Loader'
const LandingPage = () => {
  return (
    <>
     <LoaderWithTimeout loadingTime={3000}>
      
    <Header />
    <Hero />
    <AboutMe />
    <SkillSet />
    <Projects />
    <Footer />
    </LoaderWithTimeout>
    
    </>
  )
}

export default LandingPage