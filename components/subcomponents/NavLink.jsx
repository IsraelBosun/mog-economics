import Link from "next/Link"

import React from 'react'

const NavLink = ({ href, link, cat}) => {
  return (
    <li className="list-none cursor-pointer mr-8">
        <Link
        href = {href}
        spy = {true}
        smooth = {true}
        duration = { 500 }
        offset = {-50}
        className = "font-bold transition-all duration-300"
        >
            {link}
            {cat}
        </Link>
    </li>
  )
}

export default NavLink