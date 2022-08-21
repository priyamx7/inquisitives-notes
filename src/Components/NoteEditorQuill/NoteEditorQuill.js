import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Link, useParams } from "react-router-dom";
import "../NoteEditorQuill.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useApp } from "../../Contexts/AppContext";

ReactQuill.modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }],

    ["bold", "italic", "underline", "strike", "blockquote"],

    [{ list: "ordered" }, { list: "bullet" }],

    ["link"],

    ["clean"],
  ],
};

ReactQuill.formats = [
  "header",

  "font",

  "bold",

  "italic",

  "underline",

  "strike",

  "blockquote",

  "list",

  "bullet",

  "link",
];

export const NoteEditor = (props) => {
  const { noteId } = useParams();
  const { editorValue, setEditorValue } = useApp();

  // const handler = (e) => {
  //   console.log(e);
  //   setValue(e);
  // };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="note-editor-container">
        <div>
          <Link className="note-editor-link" to={props.to}>
            <IoMdArrowRoundBack />
            <span className="note-editor-link-text">{props.goBack}</span>
          </Link>
        </div>
        <div className="note-editor">
          <div>
            <input
              className="note-editor-title"
              id={noteId}
              type="text"
              placeholder="Title"
              onChange={props.titleChangeHandler}
            />
          </div>
          <div className="note-editor-content">
            <ReactQuill
              id={noteId}
              theme="snow"
              modules={ReactQuill.modules}
              placeholder="Start writing..."
              value={editorValue}
              onChange={(content, delta, source, editor) => {
                const text = editor.getText(content);
                setEditorValue({ content: text });
                {props.contentChangeHandler()}
              }}
              // value={value}
              // onChange={props.contentChangeHandler}
              // onChange={handler}
              // onChange={() => {
              //   console.log(document.getElementsByClassName("ql-editor")[0].innerHtml
              //   setValue()
              // }}
              // onChange={props.contentChangeHandler}
              />
          </div>
              {/* {console.log(ReactQuill.onChange.content)} */}
        </div>
        {/* {console.log(ReactQuill.UnprivilegedEditor)} */}
      </div>
    </div>
  );
};

{
  /* <div className="note-editor">
          <div>
            <input
              className="note-editor-title"
              id={noteId}
              type="text"
              placeholder="Title"
              onChange={props.titleChangeHandler}
            />
          </div>
          <div>
            <textarea
              className="note-editor-content"
              id={noteId}
              placeholder="Start writing..."
              onChange={props.contentChangeHandler}
            ></textarea>
          </div>
          <div className="note-editor-actions">
            <NoteEditorActions />
          </div>
        </div> */
}

// import { useQuill } from "react-quill";

// const [quill, quillRef] = useQuill;
// const [value, setValue] = useState("");

// useEffect(() => {
//   if (quill) {
//     quill.on("text-change", () => {
//       console.log(quillRef.current.firstChild.innerHtml);
//       setValue(quillRef.current.firstChild.innerHtml);
//     });
//   }
// }, [quill]);

// {
//   console.log(value);
// }
