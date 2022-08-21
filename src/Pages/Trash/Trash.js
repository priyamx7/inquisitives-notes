import React from "react";
import "../Home/Home.css";
import "./Trash.css"
import { NavBar } from "../../Components/NavBar/NavBar";
import { SideBar } from "../../Components/SideBar/SideBar";
import { TrashNote } from "../../Components/TrashNote/TrashNote";
import { useApp } from "../../Contexts/AppContext";
import trashCanDynamicGradient from "../../Assets/Images/trashCanDynamicGradient.png"

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
            {state.trash.length === 0 ? (
              <div>
                <div className="empty-image-container">
                  <img
                    className="empty-image"
                    src={trashCanDynamicGradient}
                    alt="trash"
                  />
                </div>
                <div>
                  <p className="empty-message">Trash is empty.</p>
                </div>
              </div>
            ) : (
              state.trash.map((trashNote) => {
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
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// // {
//   /* <div>
//             {state.archives.length === 0 ?
//               <div>
//                 <div>
//                 <img className="empty-image" src={fileTextDynamicImage} alt="archive-file" />
//                 </div>
//                 <div>
//                 <p className="empty-message">Archives is empty.</p>
//                 </div>
//               </div>
//              : state.archives.map((archivedNote) => {
//               return (
//                 <Note
//                   id={archivedNote.id}
//                   to={`/edit-archived-note/${archivedNote.id}`}
//                   title={archivedNote.title}
//                   content={archivedNote.content}
//                   deleteBtnClick={() => {
//                     dispatch({ type: "MOVE_TO_TRASH", payload: archivedNote });
//                     dispatch({
//                       type: "REMOVE_FROM_ARCHIVES",
//                       payload: archivedNote,
//                     });
//                   }}
//                   archiveBtnClick={() => {
//                     dispatch({ type: "MOVE_TO_NOTES", payload: archivedNote });
//                     dispatch({
//                       type: "REMOVE_FROM_ARCHIVES",
//                       payload: archivedNote,
//                     });
//                   }}
//                 />
//               );
//             })}
//           </div> */
// // }

// {
//   state.trash.map((trashNote) => {
//     return (
//       <TrashNote
//         title={trashNote.title}
//         content={trashNote.content}
//         recoverBtnClick={() => {
//           dispatch({ type: "MOVE_TO_NOTES", payload: trashNote });
//           dispatch({
//             type: "REMOVE_FROM_TRASH",
//             payload: trashNote,
//           });
//         }}
//         deleteBtnClick={() =>
//           dispatch({
//             type: "REMOVE_FROM_TRASH",
//             payload: trashNote,
//           })
//         }
//       />
//     );
//   });
// }
