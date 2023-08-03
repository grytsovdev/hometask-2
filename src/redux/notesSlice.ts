import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialNotes } from "../data/initialNotes";
import { Note } from "../utils/Note";

export interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: initialNotes,
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      const filteredNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      return {
        ...state,
        notes: filteredNotes,
      };
    },
    archiveNote: (state, action: PayloadAction<number>) => {
      const index = state.notes.findIndex((note) => note.id == action.payload);
      const updatedNotes = [...state.notes];
      updatedNotes[index].archived = !updatedNotes[index].archived;
      return { ...state, notes: updatedNotes };
    },
  },
});
export const { addNote, deleteNote, archiveNote } = noteSlice.actions;
export default noteSlice.reducer;
