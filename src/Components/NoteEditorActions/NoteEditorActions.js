import React from "react";
import "./NoteEditorActions.css"
import { BiBold } from "react-icons/bi";
import { AiOutlineItalic, AiOutlineUnderline } from "react-icons/ai";
import { MdOutlineStrikethroughS } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";
import { VscListOrdered } from "react-icons/vsc";
import { RiListUnordered, RiInboxArchiveLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";

export const NoteEditorActions = () => {
  return (
    <div className="note-editor-actions-container">
      <div className="actions">
        <div>
          <span className="font-drop-down">
            <select>
              <option value="normal">Normal</option>
              <option value="h1">Heading 1</option>
              <option value="h2">Heading 2</option>
              <option value="h3">Heading 3</option>
            </select>
          </span>
          <button className="btn-icon-editor">
            <BiBold />
          </button>
          <button className="btn-icon-editor">
            <AiOutlineItalic />
          </button>
          <button className="btn-icon-editor">
            <AiOutlineUnderline />
          </button>
          <button className="btn-icon-editor">
            <MdOutlineStrikethroughS />
          </button>
          <button className="btn-icon-editor">
            <VscListOrdered />
          </button>
          <button className="btn-icon-editor">
            <RiListUnordered />
          </button>
          <button className="btn-icon-editor">
            <FaQuoteRight />
          </button>
        </div>
        <div>
          <button className="btn-icon-editor">
            <RiInboxArchiveLine />
          </button>
          <button className="btn-icon-editor">
            <HiOutlineTrash />
          </button>
        </div>
      </div>
    </div>
  );
};
