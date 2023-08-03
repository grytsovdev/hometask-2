import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NotesState } from "../../redux/notesSlice";
import { NoteItem } from "../NoteItem/NoteItem";
import { NotesHeader } from "../NotesHeader/NotesHeader";
import "./NotesTable.scss";

export const NotesTable = (): React.JSX.Element => {
  const notes = useSelector((state: NotesState) => state.notes);
  const [showArchived, setShowArchived] = useState(false);

  const filtered = showArchived
    ? notes.filter((note) => note.archived)
    : notes.filter((note) => !note.archived);

  return (
    <div className="notes-table">
      <NotesHeader showArchived={() => setShowArchived(!showArchived)} />
      {filtered.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};
