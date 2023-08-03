import React from "react";
import { Note } from "../../utils/Note";
import { NotesControls } from "../NotesControls/NotesControls";
import "./NoteItem.scss";

interface NoteItemProps {
  note: Note;
}

export const NoteItem = ({ note }: NoteItemProps): React.JSX.Element => {
  const mentionedDatesStr = note.mentionedDates.join(", ");
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.createdDate}</p>
      <p>{note.category}</p>
      <p>{note.body}</p>
      <p>{mentionedDatesStr}</p>
      <NotesControls noteId={note.id}></NotesControls>
    </div>
  );
};
