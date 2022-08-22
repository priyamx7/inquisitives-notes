import React from "react";
import {Link} from "react-router-dom"
import "./Landing.css";
import { NavBar } from "../../Components";

export const Landing = () => {
  return (
    <div>
      <NavBar />
      <div className="landing-page-container">
        <div>
          <p className="landing-page-title">Taking Notes has never been easier...</p>
        </div>
        <div>
          <Link className="btn btn-rnd btn-fill link" to="/home">Take Notes</Link>
        </div>
      </div>
    </div>
  );
};
