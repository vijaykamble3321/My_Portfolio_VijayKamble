import React from 'react'
import MainPage from './MainPage'
import Skills from './Skills'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Experience from './Experience'
import SocialLinks from './SocialLinks'

const Layout = () => {
  return (
    <div className="scroll-smooth">
      <MainPage/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  )
}

export default Layout