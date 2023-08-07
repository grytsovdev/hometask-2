import React from "react";
import { IconContext } from "react-icons";
import { FaComment, FaLightbulb, FaList } from "react-icons/fa";
import { Note } from "../../utils/Note";
import { NotesControls } from "../NotesControls/NotesControls";

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
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Task":
        return <FaList />;
      case "Idea":
        return <FaLightbulb />;
      case "Random Thought":
        return <FaComment />;
    }
  };

  if (note) {
    const mentionedDatesStr = note.mentionedDates.join(", ");
    const categoryIcon = getCategoryIcon(note.category);

    return (
      <div className="flex justify-between h-12 odd:bg-gray-200 px-4">
        <h2 className="note-item leading-[3rem] w-64 align-middle">
          <IconContext.Provider
            value={{
              color: "#4b5563",
              size: "2rem",
              className: "inline-block align-middle mr-2",
            }}>
            {categoryIcon}
          </IconContext.Provider>
          {note.title}
        </h2>
        <p className="note-item leading-[3rem] text-gray-600">
          {note.createdDate}
        </p>
        <p className="note-item leading-[3rem] text-gray-600">
          {note.category}
        </p>
        <p className="note-item leading-[3rem] text-gray-600">{note.body}</p>
        <p className="note-item leading-[3rem] text-gray-600">
          {mentionedDatesStr}
        </p>
        <NotesControls note={note} handleEditNote={setNoteToEdit} />
      </div>
    );
  }
  const categoryIcon = getCategoryIcon(category);
  return (
    <div className="flex justify-around h-12 odd:bg-gray-200 px-4">
      <h2 className="note-item leading-[3rem] text-gray-600">
        <IconContext.Provider
          value={{
            color: "#4b5563",
            size: "2rem",
            className: "inline-block align-middle mr-2",
          }}>
          {categoryIcon}
        </IconContext.Provider>
        {category}
      </h2>
      <p className="note-item leading-[3rem] text-gray-600">{active}</p>
      <p className="note-item leading-[3rem] text-gray-600">{archived}</p>
    </div>
  );
};
