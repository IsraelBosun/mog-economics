import React, { useState, useEffect} from 'react'
import { Menu } from "@headlessui/react"
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine, RiSearch2Line } from "react-icons/ri"
import CoursesBody from '@/components/CoursesBody'
import { courses } from "../components/Data"

const Courses = () => {

    const [course, setcourse] = useState(courses);
    const [subject, setsubject] = useState('Economics')
    const [subjectss, setsubjectss] = useState("Economics")
    const [level, setlevel] = useState("Select Level")
    const [levelss, setlevelss] = useState([]);
    const [open, setopen] = useState(false);

    useEffect(() => {
        const allLevels = course.map((course) => {
            return course.Level
        });
        const uniqueLevels = ['Select Level', ...new Set(allLevels)]
        setlevelss(uniqueLevels)
    }, [])

    const handleClick = () => {
        
        const isDefault = (str) => {
            if (typeof str !== 'string') {
              throw new Error('Input is not a string');
            }
            return str.split(' ').includes("Level");
          };
          

        const newLevels = courses.filter((leveli) => {
            const levelNum = parseInt(leveli.Level)

            // if all values are default
            if (leveli.Level === subject) {
                return leveli
            }
            
            // if level is default
            if (isDefault(level)) {
                return leveli
            }

            // if level is not default
            if(!isDefault(level)) {
                return leveli.Level === level;
            }

        })
    }



    const opening = () => {
        setopen(!open)
    }


  return (
    <div className='section'>
        <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
            <Menu as = 'div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
                <Menu.Button onClick = {opening} className='flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left'>
                <RiHome5Line  className='dropdown-icon-primary text-2xl mr-[18px] text-violet-700' />
                <div>
                <div className='text-[15px] font-medium leading-tight'>{subject}</div>
                <div className='text-[13px]'>Select your Subject</div>
                </div>
                {
                    open ? (
                        <RiArrowDownSLine className='text-2xl text-violet-700 ml-auto' />
                    ) : (
                        <RiArrowUpSLine className='text-2xl text-violet-700 ml-auto' />
                    )
                }
                </Menu.Button>

                <Menu.Items className = "px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute mx-auto w-full z-10 list-none rounded-b-lg">
                    <Menu.Item 
                    as = "li"
                    onClick = {() => setsubject("Economics")} 
                    className =" cursor-pointer hover:text-violet-700 transition">
                    Economics
                    </Menu.Item>
                 </Menu.Items>
            </Menu>


            <Menu as = 'div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
                <Menu.Button onClick = {opening} className='flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left'>
                <RiHome5Line  className='dropdown-icon-primary text-2xl mr-[18px] text-violet-700' />
                <div>
                <div className='text-[15px] font-medium leading-tight'>{level}</div>
                <div className='text-[13px]'>Select Level</div>
                </div>
                {
                    open ? (
                        <RiArrowDownSLine className='text-2xl text-violet-700 ml-auto' />
                    ) : (
                        <RiArrowUpSLine className='text-2xl text-violet-700 ml-auto' />
                    )
                }
                </Menu.Button>

                <Menu.Items className = "px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute mx-auto w-full z-10 list-none rounded-b-lg">
                {levelss.map((level, index) => {
                    return (
                        <Menu.Item 
                        as = "li" 
                        key = {index}
                        onClick = {() => setlevel(level)} 
                        className =" cursor-pointer hover:text-violet-700 transition">
                        {level}
                        </Menu.Item>
                    )
                    })}
                 </Menu.Items>
            </Menu>

            <button onClick = {() => handleClick()} className = "bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-3xl">
                <RiSearch2Line />
            </button>
        </div>
        <div className=' grid md:grid-cols-3 sm:grid-cols-2 mt-12 gap-8'>
        {
            course.map((course) => {
                return <CoursesBody className = "hidden" key={course.id} {...course} />
            })
        }
        </div>
    </div>    
  )
}

export default Courses
