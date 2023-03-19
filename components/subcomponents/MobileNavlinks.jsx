import React from 'react'
import Link from "next/link"


const MobileNavlinks = ({ setToggle, link, href }) => {
  return (
    <li className = "list-none cursor-pointer mr-8">
            <Link 
              href ={href}
              spy = {true}
              smooth ={true}
              duration = {500}
              offset = {-50}
              className ="font-bold transition-all duration-300"
              onClick = {(prev) => setToggle(!prev)}
              >
                {link}
            </Link>
        </li>
  )
}

export default MobileNavlinks