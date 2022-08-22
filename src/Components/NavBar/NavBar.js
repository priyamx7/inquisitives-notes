import React from "react";
import {Link} from "react-router-dom"
import "./NavBar.css";
import { MdDarkMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useTheme } from "../../Contexts/ThemeContext";

export const NavBar = () => {
  const { dispatch } = useTheme();
  return (
    <div className="nav">
      <div className="logo-and-title">
        <Link className="link" to="/">
          Logo & Title
        </Link>
      </div>
      <div className="nav-items">
        <button
          className="btn-icon"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          <MdDarkMode />
        </button>
        <button className="btn">
          <CgProfile />
        </button>
      </div>
    </div>
  );
};
