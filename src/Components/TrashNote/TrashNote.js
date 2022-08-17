import React from "react";
import "./TrashNote.css";
import { RiDeviceRecoverLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";

export const TrashNote = (props) => {
  return (
    <div key={props.id} className="note">
      <div>
        <p className="note-title">{props.title}</p>
      </div>
      <div>
        <p>{props.content}</p>
      </div>
      <div className="note-actions">
        <button title="Recover" onClick={props.recoverBtnClick}>
        <div className="btn-text-and-icon recover">
            <RiDeviceRecoverLine />
            <span>Recover</span>
          </div>
        </button>
        <button title="Delete" onClick={props.deleteBtnClick}>
          <div className="btn-text-and-icon delete">
            <HiOutlineTrash />
            <span>Delete</span>
          </div>
        </button>
      </div>
    </div>
  );
};