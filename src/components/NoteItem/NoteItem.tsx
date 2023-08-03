import React from "react";
import { Note } from "../../utils/Note";
import { NotesControls } from "../NotesControls/NotesControls";
import "./NoteItem.scss";

interface NoteItemProps {
  note: Note;
  setNoteToEdit: (note: Note) => void;
}

export const NoteItem = ({
  note,
  setNoteToEdit,
}: NoteItemProps): React.JSX.Element => {
  const mentionedDatesStr = note.mentionedDates.join(", ");
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.createdDate}</p>
      <p>{note.category}</p>
      <p>{note.body}</p>
      <p>{mentionedDatesStr}</p>
      <NotesControls note={note} handleEditNote={setNoteToEdit}></NotesControls>
    </div>
  );
};
