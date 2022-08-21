import React from "react";
import "./Home.css";
import { SideBar } from "../../Components/SideBar/SideBar";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Note } from "../../Components/Note/Note";
import { useApp } from "../../Contexts/AppContext";

export const Home = () => {
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
            <p className="note-title">Notes</p>
          </div>
          <button className="btn btn-rnd btn-fill btn-note">
            Sort: Latest
          </button>
          <div>
            {state.notes.map((note) => {
              return (
                <Note
                  id={note.id}
                  to={`/edit-note/${note.id}`}
                  title={note.title}
                  content={note.content}
                  editNote={() => {
                    console.log("editNote clicked")
                  }}
                  archiveBtnClick={() => {
                    dispatch({ type: "MOVE_TO_ARCHIVES", payload: note });
                    dispatch({ type: "REMOVE_FROM_NOTES", payload: note });
                  }}
                  deleteBtnClick={() => {
                    dispatch({ type: "MOVE_TO_TRASH", payload: note });
                    dispatch({ type: "REMOVE_FROM_NOTES", payload: note });
                  }}
                />
              );
            })}
          </div>
          {console.log(state)}
        </div>
      </div>
    </div>
  );
};
