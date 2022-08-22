import { nanoid } from "nanoid";

export const initialValue = {
  theme: true,
  notes: [{ id: nanoid(), title: "New Note", content: "Start writing..." }],
  pinnedNotes: [],
  archives: [],
  trash: [],
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return console.log(state.theme);

    case "CREATE_NEW_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: nanoid(),
            title: "New Note",
            content: "Start writing...",
          },
        ],
      };

    case "REMOVE_FROM_NOTES":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };

    case "MOVE_TO_NOTES":
      return { ...state, notes: [...state.notes, { ...action.payload }] };

    case "MOVE_TO_ARCHIVES":
      return { ...state, archives: [...state.archives, { ...action.payload }] };

    case "MOVE_TO_TRASH":
      return { ...state, trash: [...state.trash, { ...action.payload }] };

    case "REMOVE_FROM_ARCHIVES":
      return {
        ...state,
        archives: state.archives.filter(
          (archivedNote) => archivedNote.id !== action.payload.id
        ),
      };

    case "REMOVE_FROM_TRASH":
      return {
        ...state,
        trash: state.trash.filter(
          (trashNote) => trashNote.id !== action.payload.id
        ),
      };

    case "NOTE_TITLE_HANDLER":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? { ...note, title: action.payload.value }
            : { ...note }
        ),
      };

    case "ARCHIVED_NOTE_TITLE_HANDLER":
      return {
        ...state,
        archives: state.archives.map((archivedNote) =>
          archivedNote.id === action.payload.id
            ? { ...archivedNote, title: action.payload.value }
            : { ...archivedNote }
        ),
      };
    case "NOTE_CONTENT_HANDLER":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? { ...note, content: action.payload.value }
            : { ...note }
        ),
      };
    case "ARCHIVED_NOTE_CONTENT_HANDLER":
      return {
        ...state,
        archives: state.archives.map((archivedNote) =>
          archivedNote.id === action.payload.id
            ? { ...archivedNote, content: action.payload.value }
            : { ...archivedNote }
        ),
      };
    case "PIN_NOTE":
      return {
        ...state,
        pinnedNotes: [...state.pinnedNotes, { ...action.payload }],
      };

    case "REMOVE_FROM_PINNED_NOTES":
      return {
        ...state,
        pinnedNotes: state.pinnedNotes.filter(
          (pinnedNote) => pinnedNote.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
