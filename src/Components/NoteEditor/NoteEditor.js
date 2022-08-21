import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Link, useParams } from "react-router-dom";
import { NoteEditorActions } from "../NoteEditorActions/NoteEditorActions";
import "./NoteEditor.css";
import { IoMdArrowRoundBack } from "react-icons/io";

export const NoteEditor = (props) => {
  const { noteId } = useParams();
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="note-editor-container">
        <div>
          <Link className="note-editor-link" to={props.to}>
            <IoMdArrowRoundBack />
            <span className="note-editor-link-text">{props.goBack}</span>
          </Link>
        </div>
        <div className="note-editor">
          <div>
            <input
              className="note-editor-title"
              id={noteId}
              type="text"
              placeholder="Title"
              onChange={props.titleChangeHandler}
            />
          </div>
          <div>
            <textarea
              className="note-editor-content"
              id={noteId}
              placeholder="Start writing..."
              onChange={props.contentChangeHandler}
            ></textarea>
          </div>
          <div className="note-editor-actions">
            <NoteEditorActions />
          </div>
        </div>
      </div>
    </div>
  );
};