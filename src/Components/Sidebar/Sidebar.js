import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiInboxArchiveLine, RiSearchLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { useApp } from "../../Contexts/AppContext";

export const SideBar = () => {
  const { dispatch } = useApp();
  return (
    <div>
      <div className="side-bar-container">
        <div>
          <Link className="link" to="/home">
            <AiOutlineHome size={20} />
            <span className="link-text">Home</span>
          </Link>
        </div>
        <div>
          <Link className="link" to="/archives">
            <RiInboxArchiveLine size={20} />
            <span className="link-text">Archives</span>
          </Link>
        </div>
        <div>
          <Link className="link" to="/trash">
            <HiOutlineTrash size={20} />
            <span className="link-text">Trash</span>
          </Link>
        </div>
        <div>
          <Link className="link" to="/search">
            <RiSearchLine size={20} />
            <span className="link-text">Search</span>
          </Link>
        </div>
        <div>
          <Link className="link" to="/profile">
            <CgProfile size={20} />
            <span className="link-text">Profile</span>
          </Link>
        </div>
        <div>
          <button
            className="btn btn-rnd btn-fill"
            onClick={() => dispatch({ type: "CREATE_NEW_NOTE" })}
          >
            Create new note
          </button>
        </div>
      </div>
    </div>
  );
};
