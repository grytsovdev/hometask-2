import { useState } from "react";
import { useDispatch } from "react-redux";

import { AddNoteButton } from "./components/AddNoteButton/AddNoteButton";
import { Modal } from "./components/Modal/Modal";

import { NotesContainer } from "./components/NotesContainer/NotesContainer";
import "./index.css";
import { addNote, editNote } from "./redux/notesSlice";
import { Note } from "./utils/Note";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState<Note | null>(null);
  const [header, setHeader] = useState("Your notes");

  const dispatch = useDispatch();

  const handleAddNote = (note: Note) => {
    dispatch(addNote(note));
  };
  const handleEditNote = (note: Note) => {
    setIsOpen(true);
    setIsEditing(true);
    setNote(note);
  };

  const onEditNote = (editedNote: Note) => {
    setIsOpen(false);
    dispatch(editNote(editedNote));
  };

  return (
    <div id="App" className="container w-full mx-auto">
      <h1 className=" text-3xl font-bold mt-5 text-gray-600">{header}</h1>
      <Modal
        isOpen={isOpen}
        isEditing={isEditing}
        close={() => {
          setIsOpen(false);
          setIsEditing(false);
        }}
        onAddNote={handleAddNote}
        noteToEdit={note}
        onEditNote={onEditNote}
      />
      <NotesContainer
        isStats={false}
        setHeader={setHeader}
        handleEditNote={handleEditNote}
      />
      <AddNoteButton onClick={() => setIsOpen(true)} />
      <NotesContainer isStats={true} />
    </div>
  );
}

export default App;
