import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages";
import { Archives } from "./Pages";
import { Trash } from "./Pages";
import { Search } from "./Pages";
import { Profile } from "./Pages";
import { Landing } from "./Pages";
import { NoteEditor } from "./Components";
import { useApp } from "./Contexts/AppContext";

function App() {
  const { dispatch } = useApp();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/edit-note/:noteId"
          element={
            <NoteEditor
              to="/home"
              goBack="Go back to home"
              titleChangeHandler={(e) =>
                dispatch({ type: "NOTE_TITLE_HANDLER", payload: e.target })
              }
              contentChangeHandler={(x) => {
                dispatch({ type: "NOTE_CONTENT_HANDLER", payload: x.target });
                console.log(x.target);
              }}
            />
          }
        />
        <Route
          path="/edit-archived-note/:noteId"
          element={
            <NoteEditor
              to="/archives"
              goBack="Go back to archives"
              titleChangeHandler={(a) =>
                dispatch({
                  type: "ARCHIVED_NOTE_TITLE_HANDLER",
                  payload: a.target,
                })
              }
              contentChangeHandler={(b) =>
                dispatch({
                  type: "ARCHIVED_NOTE_CONTENT_HANDLER",
                  payload: b.target,
                })
              }
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
