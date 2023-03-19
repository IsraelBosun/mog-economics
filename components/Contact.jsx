import React from 'react'
import { motion } from "framer-motion"

import { data } from "./Data"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image"
import "swiper/css/pagination"


const Contact = ({avatar, name, school, review }) => {
  return (
    <div className='section' id = "contact">
      <div className = "testimonials__reviews">
        <h5 className = "font-bold text-center text-2xl leading-8 -mt-20">Reviews from Students</h5>
        <h2 className='text-2xl leading-8 font-bold text-center my-[1rem] text-Teal-400'>Testimonials</h2>
        <Swiper
        modules = {[ Pagination ]}
        spaceBetween = {40}
        slidesPerView = {1}
        pagination = {{ clickable: true }}
        className='container testimonials__container'>
           {
              data.map(({ avatar, name, review, school }, index) => {
                return(
                  <SwiperSlide key={index} className ="testimonials__swiper text-sm flex flex-col text-[#e9e9ea] items-center justify-center text-center gap-4 bg-Teal py-[1rem] px-[0.9rem] rounded-[2rem]">
                      <div className=' '>
                      <div className='mt-12 w-36 h-36 aspect-w-1 aspect-h-1 overflow-hidden rounded-full mx-auto mb-4 border-4 border-teal-800'>
                        <Image src={avatar} width ={400} height = {400} alt="" />
                      </div>
                      <p className='testimonials__text'>{review}</p>
                      <div className='testimonials__nameschool'>
                        <div className = "testi__name mt-5">{name}</div>
                        <div className = "font-semibold ">{school}</div>
                      </div>
                      </div>
                  </SwiperSlide>
                )
              })
            }
        </Swiper>
      </div>

      <div className=' mt-16 text-center max-w-[600px] mx-auto '>
        <div className='sm:text-3xl text-2xl font-bold mb-5'>
          Subscribe to Newsletter
        </div>
        <p className='text-sm leading-7 text-gray'>
        Never miss a beat in the world of Economics - subscribe to our newsletter and receive updates on our latest courses and learning resources.        </p>
        <motion.form
        initial = {{ scale: 0 }}
        whileInView = {{ scale: 1 }}
        trasition = {{ duration: 0.3 }}
        className ="mt-5 "
        action="">
          <input 
          type="text"
          placeholder='Enter Your Email Address'
          className='sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60 rounded-lg'
          />
          <button className='text-sm  text-white bg-Teal mt-3   sm:p-3 p-2 shadow-md font-bold rounded-r-lg'>
            Subscribe
          </button>
        </motion.form>
      </div>  
    </div>
  )
}

export default Contact