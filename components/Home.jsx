import React from 'react'
import hero from "../public/assets/hero.png"

import { logos } from "./Data"
import Image from "next/image";
import { motion } from "framer-motion"



const Home = () => {

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
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            {" "}
            Your E-learning Partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Simplifying  Economics <br /> for university  Students
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            MOG simplifies Economics for students with engaging tutorials and interactive exercises. Start learning today!
          </p>

          <div className="mt-6">
          <a href = "#courses" className="transition-all duration-900">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm hover:text-Teal hover:bg-white border hover:border-Teal">
              Get Started
            </button>
            </a>
          <a href="#teacher">
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm hover:text-Teal hover:bg-white hover:border-0">
              Discover
            </button>
          </a>
          </div>
        </div>
        <div className="md:w-[60%]">
        <Image src={hero} alt="hello" width={600} height={600} />

        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          We have students from over{" "}
          <span className="text-Teal">
            100+ leading universities in Nigeria
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-10"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <Image src={logo} alt="hello" width={900} height={200} className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Home