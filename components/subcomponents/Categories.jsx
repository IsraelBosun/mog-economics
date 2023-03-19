import React from 'react'
import { motion } from "framer-motion"

const Categories = ({ icon, category, view }) => {
  return (
    <div>
        <motion.div
        whileHover = {{ scale: 1.1 }}
        className = "flex items-center flex-col gap-4 bg-white p-8 rounded-md max-h-full overflow-y-auto text-sm"
        >
         <div className='text-4xl text-Teal'>{icon}</div>
         <div>{category}</div>
         <div className='text-sm text-gray'>
            {view}
         </div>
        </motion.div>
    </div>
  )
}

export default Categories;