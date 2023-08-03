import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import { AddNoteButton } from "./components/AddNoteButton/AddNoteButton";
import { Modal } from "./components/Modal/Modal";

import { NotesTable } from "./components/NotesTable/NotesTable";
import { addNote } from "./redux/notesSlice";
import { Note } from "./utils/Note";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddNote = (note: Note) => {
    dispatch(addNote(note));
  };
  return (
    <div id="App">
      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        onAddNote={handleAddNote}></Modal>
      <NotesTable></NotesTable>
      <AddNoteButton
        onClick={() => {
          setIsOpen(true);
        }}></AddNoteButton>
    </div>
  );
}

export default App;
