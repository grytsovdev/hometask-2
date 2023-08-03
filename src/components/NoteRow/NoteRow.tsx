import React from "react";
import { Note } from "../../utils/Note";
import { NotesControls } from "../NotesControls/NotesControls";
import "./NoteRow.scss";

interface NoteItemProps {
  note?: Note;
  setNoteToEdit?: (note: Note) => void;
  category?: string;
  archived?: number;
  active?: number;
}

export const NoteRow = ({
  note,
  setNoteToEdit,
  category = "",
  archived = 0,
  active = 0,
}: NoteItemProps): React.JSX.Element => {
  const getCategoryIconClass = (category: string) => {
    switch (category) {
      case "Task":
        return "tasks";
      case "Idea":
        return "lightbulb";
      case "Random Thought":
        return "comment";
    }
  };

  if (note) {
    const mentionedDatesStr = note.mentionedDates.join(", ");
    const categoryIconClass = getCategoryIconClass(note.category);

    return (
      <div className="note-row">
        <h2>
          <i className={categoryIconClass}></i>
          {note.title}
        </h2>
        <p>{note.createdDate}</p>
        <p>{note.category}</p>
        <p>{note.body}</p>
        <p>{mentionedDatesStr}</p>
        <NotesControls note={note} handleEditNote={setNoteToEdit} />
      </div>
    );
  }
  const categoryIconClass = getCategoryIconClass(category);
  return (
    <div className="note-row stats">
      <h2>
        <i className={categoryIconClass}></i>
        {category}
      </h2>
      <p>{active}</p>
      <p>{archived}</p>
    </div>
  );
};
