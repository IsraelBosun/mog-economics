import React, { useState } from 'react'
import Categories from "./subcomponents/Categories.jsx"
import Course from "./subcomponents/Course.jsx"
import Subjects from "./subcomponents/Subjects.jsx"

import { motion } from "framer-motion"
import { categories } from "./Data.jsx"
import { courses } from "./Data.jsx"
import { subjects } from "./Data.jsx"

const Courses = () => {

  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

   const [showSubjects, setshowSubjects] = useState(true);

   const handleClick = () => {
      setshowSubjects(!showSubjects)
   }

  return (
    <div className='section' id='courses'>
      <div className='text-center'>
        <div className='sm:text-3xl text-2xl font-bold mb-5'>
          Our Top <span className='text-Teal'>Categories</span>
        </div>
        <p className='text-sm text-gray leading-7 max-width-[700px] mx-auto'>
        Our Economics tutorial website offers a wide range of top categories to choose from, including macroeconomics, microeconomics, finance, international trade, and economic history       
         </p>
      </div>

      <div onClick = {handleClick}>
        {showSubjects ? (
            <>
              <motion.div
               variants = {container}
               initial = "hidden"
               whileInView="visible"
               className='grid md:grid-cols-3 sm:grid-cols-2 mt-12 gap-8'>
                {categories.map(category => {
                  return <Categories key = {category.id} {...category} />
                })}
              </motion.div>
            </>
        ) : (
          <>
              <motion.div
               variants = {container}
               initial = "hidden"
               whileInView="visible"
               className={`grid transform ${showSubjects ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} transition duration-500 ease-in-out md:grid-cols-3 sm:grid-cols-2 mt-12 gap-8 transition duration-500 ease-in-out`}>
                {subjects.map(subject => {
                  return <Subjects key = {subject.id} {...subject}/>
                })}
              </motion.div>
          </>
        )}
      </div>

      <div className='text-xl font-bold mt-32'>Most Popular Courses</div>
      <div className='mt-12 overflow-x-hidden w-full relative'>
        <div className='flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide'>
            {courses.slice(0, 4).map(course => {
              return <Course key={course.id} {...course}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default Courses