import React from "react";
import "./Home.css";
import { Sidebar } from "../../Components";
import { NavBar } from "../../Components";
import { Note } from "../../Components";
import { useApp } from "../../Contexts/AppContext";
import { BsPin, BsPinFill } from "react-icons/bs";

export const Home = () => {
  const { state, dispatch } = useApp();
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
          <div
            className={
              state.pinnedNotes.length === 0
                ? "empty-pinned-note"
                : "pinned-notes-container"
            }
          >
            <p className="note-title">Pinned Notes</p>
            {state.pinnedNotes.map((pinnedNote) => {
              return (
                <Note
                  id={pinnedNote.id}
                  to={`/edit-archived-note/${pinnedNote.id}`}
                  title={pinnedNote.title}
                  content={pinnedNote.content}
                  pinIcon={<BsPinFill />}
                  pinBtnHandler={() => {
                    dispatch({ type: "REMOVE_FROM_PINNED_NOTES", payload: pinnedNote });
                    dispatch({ type: "MOVE_TO_NOTES", payload: pinnedNote });
                  }}
                  deleteBtnClick={() => {
                    dispatch({ type: "MOVE_TO_TRASH", payload: pinnedNote });
                    dispatch({
                      type: "REMOVE_FROM_PINNED_NOTES",
                      payload: pinnedNote,
                    });
                  }}
                  archiveBtnClick={() => {
                    dispatch({ type: "MOVE_TO_NOTES", payload: pinnedNote });
                    dispatch({
                      type: "REMOVE_FROM_PINNED_NOTES",
                      payload: pinnedNote,
                    });
                  }}
                />
              );
            })}
          </div>

          <div>
            <p className="note-title">Notes</p>
          </div>
          <div>
            {state.notes.map((note) => {
              return (
                <Note
                  id={note.id}
                  to={`/edit-note/${note.id}`}
                  title={note.title}
                  content={note.content}
                  pinIcon={<BsPin />}
                  editNote={() => {
                    console.log("editNote clicked");
                  }}
                  pinBtnHandler={() => {
                    dispatch({ type: "PIN_NOTE", payload: note });
                    dispatch({ type: "REMOVE_FROM_NOTES", payload: note });
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
        </div>
        {console.log(state)}
      </div>
    </div>
  );
};

// <div>
//             <p className="note-title">Notes</p>
//           </div>
//           <div>
//             {state.notes.map((note) => {
//               return (
//                 <Note
//                   id={note.id}
//                   // to={`/edit-note/${note.id}`}
//                   title={note.title}
//                   content={note.content}
//                   editNote={() => {
//                     console.log("editNote clicked");
//                   }}
//                   pinBtnHandler={() => {
//                     dispatch({ type: "PIN_NOTE", payload: note });
//                   }}
//                   archiveBtnClick={() => {
//                     dispatch({ type: "MOVE_TO_ARCHIVES", payload: note });
//                     dispatch({ type: "REMOVE_FROM_NOTES", payload: note });
//                   }}
//                   deleteBtnClick={() => {
//                     dispatch({ type: "MOVE_TO_TRASH", payload: note });
//                     dispatch({ type: "REMOVE_FROM_NOTES", payload: note });
//                   }}
//                 />
//               );
//             })}
//           </div>
