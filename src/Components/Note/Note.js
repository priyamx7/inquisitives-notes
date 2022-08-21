import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Note.css";
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdColorLens, MdLabelOutline } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";

export const Note = (props) => {
  const colors = [
    "#E74B7F",
    "#319B54",
    "#058ED9",
    "#F09F9C",
    "#FCC3A3",
    "#89E6D8",
    "#FDE74C",
  ];

  const [noteBgColor, setNoteBgColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

  return (
    <div
      className="note"
      key={props.id}
      style={{ background: `${noteBgColor}` }}
    >
      <div className="note-title" onClick={props.editNote}>
        <Link className="link" to={props.to}>
          <p>
            {props.title.length > 20
              ? props.title.slice(0, 19) + "..."
              : props.title}
          </p>
        </Link>
      </div>
      <div onClick={props.editNote}>
        <Link className="link" to={`/edit-note/${props.id}`}>
          <p className="note-content">
            {props.content.length > 50
              ? props.content.slice(0, 49) + "..."
              : props.content}
          </p>
        </Link>
      </div>
      <div className="note-actions">
        <text className="btn-icon">
          <MdColorLens />
          <input
            className="color-picker"
            type="color"
            value={`${noteBgColor}`}
            onChange={(e) => setNoteBgColor((color) => e.target.value)}
          />
        </text>
        <button
          className="btn-icon"
          title="Archive"
          onClick={props.archiveBtnClick}
        >
          <RiInboxArchiveLine />
        </button>
        <button className="btn-icon" title="Label">
          <MdLabelOutline />
        </button>
        <button
          className="btn-icon"
          title="Delete"
          onClick={props.deleteBtnClick}
        >
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  );
};
