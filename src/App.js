import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './Pages/Home/Home';
import { Archives } from './Pages/Archives/Archives';
import { Trash } from './Pages/Trash/Trash';
import { Search } from './Pages/Search/Search';
import { Profile } from './Pages/Profile/Profile';
import { NoteEditor } from "./Components/NoteEditor/NoteEditor"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-note/:noteId" element={<NoteEditor />} />
      </Routes>
    </div>
  );
}

export default App;
