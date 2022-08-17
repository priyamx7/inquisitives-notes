export const initialValue = {
  theme: true,
  notes: [{ id: 1, title: "New Note", content: "Start writing..." }],
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
            id: state.notes.length + 1,
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

    default:
      return state;
  }
};
