import React from "react";
import "../Home/Home.css"
import { NavBar } from "../../Components/NavBar/NavBar";
import { SideBar } from "../../Components/SideBar/SideBar";
import { Note } from "../../Components/Note/Note";
import { useApp } from "../../Contexts/AppContext";

export const Archives = () => {
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
            <p className="note-title">Archives</p>
          </div>
          <div>
            {state.archives.map((archivedNote) => {
              return (
                <Note
                  id={archivedNote.id}
                  title={archivedNote.title}
                  content={archivedNote.content}
                  deleteBtnClick={() => {
                    dispatch({ type: "MOVE_TO_TRASH", payload: archivedNote });
                    dispatch({
                      type: "REMOVE_FROM_ARCHIVES",
                      payload: archivedNote,
                    });
                  }}
                  archiveBtnClick={() => {
                    dispatch({ type: "MOVE_TO_NOTES", payload: archivedNote });
                    dispatch({
                      type: "REMOVE_FROM_ARCHIVES",
                      payload: archivedNote,
                    });
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
