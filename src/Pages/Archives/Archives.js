import React from "react";
import "../Home/Home.css"
import "./Archives.css"
import { NavBar } from "../../Components";
import { SideBar } from "../../Components";
import { Note } from "../../Components";
import { useApp } from "../../Contexts/AppContext";
import fileTextDynamicImage from "../../Assets/Images/fileTextDynamicGradient.png"

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
            {state.archives.length === 0 ? 
              <div>
                <div className="empty-image-container">
                <img className="empty-image" src={fileTextDynamicImage} alt="archive-file" />
                </div>
                <div>
                <p className="empty-message">Archives is empty.</p>
                </div>
              </div>
             : state.archives.map((archivedNote) => {
              return (
                <Note
                  id={archivedNote.id}
                  to={`/edit-archived-note/${archivedNote.id}`}
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

// {state.archives.map((archivedNote) => {
//   return (
//     <Note
//       id={archivedNote.id}
//       to={`/edit-archived-note/${archivedNote.id}`}
//       title={archivedNote.title}
//       content={archivedNote.content}
//       deleteBtnClick={() => {
//         dispatch({ type: "MOVE_TO_TRASH", payload: archivedNote });
//         dispatch({
//           type: "REMOVE_FROM_ARCHIVES",
//           payload: archivedNote,
//         });
//       }}
//       archiveBtnClick={() => {
//         dispatch({ type: "MOVE_TO_NOTES", payload: archivedNote });
//         dispatch({
//           type: "REMOVE_FROM_ARCHIVES",
//           payload: archivedNote,
//         });
//       }}
//     />
//   );
// })}