import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NotesState } from "../../redux/notesSlice";
import { Note } from "../../utils/Note";
import { NoteItem } from "../NoteItem/NoteItem";
import { NotesHeader } from "../NotesHeader/NotesHeader";
import "./NotesTable.scss";

interface NotesTableProps {
  setHeader: (header: string) => void;
  handleEditNote: (note: Note) => void;
}

export const NotesTable = ({
  setHeader,
  handleEditNote,
}: NotesTableProps): React.JSX.Element => {
  const notes = useSelector((state: NotesState) => state.notes);
  const [showArchived, setShowArchived] = useState(false);

  const handleShowArchived = () => {
    setShowArchived(!showArchived);
    setHeader(showArchived ? "Your notes" : "Archived notes");
  };

  const filtered = showArchived
    ? notes.filter((note) => note.archived)
    : notes.filter((note) => !note.archived);

  return (
    <div className="notes-table">
      <NotesHeader showArchived={handleShowArchived} />
      {filtered.map((note) => (
        <NoteItem key={note.id} note={note} setNoteToEdit={handleEditNote} />
      ))}
    </div>
  );
};
