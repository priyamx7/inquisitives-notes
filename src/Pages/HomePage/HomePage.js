import React from "react";
import "./HomePage.css";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Note } from "../../Components/Note/Note";

export const HomePage = () => {
  return (
    <div>
        <div>
        <NavBar />
        </div>
      <div className="main-container">
        <div>
            <Sidebar />
        </div>
        <div className="notes-container">
          <div>
            <p className="note-title">Notes</p>
            <br />
            <p>All Notes</p>
          </div>
          <button className="btn btn-rnd btn-fill btn-note">Sort: Latest</button>
          <div>
            <Note />
          </div>
        </div>
      </div>
    </div>
  );
};
