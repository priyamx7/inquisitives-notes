import React from "react";
import "../Home/Home.css";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SideBar } from "../../Components/SideBar/SideBar";
import { TrashNote } from "../../Components/TrashNote/TrashNote";
import { useApp } from "../../Contexts/AppContext";

export const Trash = () => {
  const { state, dispatch } = useApp();
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="main-container">
        <div>
          <SideBar />
        </div>
        <div className="notes-container">
          <div>
            <p className="note-title">Trash</p>
          </div>
          <div>
            {state.trash.map((trashNote) => {
              return (
                <TrashNote
                  title={trashNote.title}
                  content={trashNote.content}
                  recoverBtnClick={() => {
                    dispatch({ type: "MOVE_TO_NOTES", payload: trashNote });
                    dispatch({
                      type: "REMOVE_FROM_TRASH",
                      payload: trashNote,
                    });
                  }}
                  deleteBtnClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_TRASH",
                      payload: trashNote,
                    })
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
