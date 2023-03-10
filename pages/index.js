import React from 'react'

import { About, Contact, Courses, Home, Footer, Teacher } from "../components/index.js"

const index = () => {
  return (
    <>
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
    </>
  )
}

export default index