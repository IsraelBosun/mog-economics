import React from 'react'
import Logo from "../public/assets/hero.png"
import Image from 'next/image'


import { About, Contact, Courses, Home, Teacher } from "../components/index.js"

const index = () => {
  return (
    <>
      <Home />
      <About />
      <Courses />
      <Teacher videoUrl="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      <Contact />
    </>
  )
}
 
export default index