import React from 'react'
import teacher2 from "../public/assets/teacher2.png"
import { accordions } from "./Data.jsx"
import Image from "next/image";

import Accordion from "./subcomponents/Accordion.jsx"
import ReactPlayer from "react-player";


const Teacher = ({ videoUrl }) => {
  return (
    <div className = "section" id = "teacher">
      <div className='grid sm:grid-cols-2 place-items-center gap-8'>
      <div className='pl-5'>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem]'>
            Discover <span>Economics:  </span><br /> Sample Our Dynamic Classes
          </div>
          <p className='text-sm leading-7 text-gray mb-5'>
          Experience a taste of our engaging and insightful Economics classes in this video. Join us for a deeper exploration of the fascinating world of Economics. 
          </p>
          </div>

        {/* <div>
          <ReactPlayer 
          controls
          width="303px"
          height="335px"
          url= {videoUrl}
          suppressHydrationWarning={true}
          />
          <button className='py-3 mt-5 px-4 bg-Teal text-white rounded-lg text-sm font-bold'>
            View Youtube
          </button>
        </div> */}

        <div 
        className=''
        >
        <ReactPlayer 
        controls
        className = ""
        width = "303px"
        height= " 335px"
        url = "https://www.youtube.com/watch?v=tVhKmJCgHok" />

        <button className='py-3 mt-5 px-4 bg-Teal text-white rounded-lg text-sm font-bold hover:text-Teal hover:bg-white border hover:border-Teal'>
          <a href="https://www.youtube.com/watch?v=tVhKmJCgHok" target = "_blank">View On YouTube</a>    
              
        </button>
        </div>

        <div className='pl-5'>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem]'>
            Testimonials
          </div>
            <p className='text-sm leading-7 text-gray mb-5'>
            Hear from our satisfied students and learn how our courses have helped them achieve success in their academic and professional careers.
              </p>
            <a href="#contact" className='transition-all duration-300'>
            <button className='py-3 px-4 bg-Teal text-white hover:text-Teal hover:bg-white  hover:border-Teal border rounded-lg text-sm font-bold  '>
              Get Started
            </button>
            </a>
        </div>

        <div className='p-4 md:w-3/4'>
          <Image src={teacher2} width= {300} height = {300} alt="" />
        </div>
      </div>

      <div className='text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]'>
        Frequently <span>Asked Questions</span>
      </div>
      <div className='mt-12 max-w-[700px] mx-auto'>
        {accordions.map(accordion => {
          return <Accordion key={accordion.id} {... accordion} />
        })}
      </div>
    </div>
  )
}

export default Teacher