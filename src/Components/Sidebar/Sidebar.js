import React from 'react'
import "./Sidebar.css"
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiInboxArchiveLine, RiSearchLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

export const Sidebar = () => {
  return (
    <div>
        <div className="side-bar-container">
          <div>
            <Link className="link" to="/home">
              <AiOutlineHome />
              <span className="link-text">Home</span>
            </Link>
          </div>
          <div>
            <Link className="link" to="/archives">
              <RiInboxArchiveLine /><span className="link-text">Archives</span>
            </Link>
          </div>
          <div>
            <Link className="link" to="/trash">
              <HiOutlineTrash />
              <span className="link-text">Trash</span>
            </Link>
          </div>
          <div>
            <Link className="link" to="/search">
              <RiSearchLine />
              <span className="link-text">Search</span>
            </Link>
          </div>
          <div>
            <Link className="link" to="/profile">
              <CgProfile />
              <span className="link-text">Profile</span>
            </Link>
          </div>
          <div>
            <button className="btn btn-rnd btn-fill">Create new note</button>
          </div>
        </div>
    </div>
  )
}
