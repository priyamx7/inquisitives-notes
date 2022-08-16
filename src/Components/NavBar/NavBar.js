import React from 'react'
import "./NavBar.css"
import { MdDarkMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export const NavBar = () => {
  return (
    <div className='nav'>
        <div className="logo-and-title">
          <p>Logo & Title</p>
        </div>
        <div className="nav-items">
          <button className="btn-icon">
            <MdDarkMode />
          </button>
          <button class="btn">
            <CgProfile />
          </button>
        </div>
      </div>
  )
}
