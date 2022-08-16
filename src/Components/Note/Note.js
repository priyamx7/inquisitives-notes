import React from "react";
import "./Note.css"
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdColorLens, MdLabelOutline, MdDarkMode } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";

export const Note = () => {
  return (
    <div class="note">
      <div>
        <p className="note-title">New Note</p>
      </div>
      <div>
        <p>Start writing...</p>
      </div>
      <div className="note-actions">
        <button className="btn-icon" title="Choose Color">
          <MdColorLens />
        </button>
        <button className="btn-icon" title="Archive">
          <RiInboxArchiveLine />
        </button>
        <button className="btn-icon" title="Label">
          <MdLabelOutline />
        </button>
        <button className="btn-icon" title="Delete">
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  );
};
