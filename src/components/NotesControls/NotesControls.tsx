import React from "react";
import { IconContext } from "react-icons";
import { FaArchive, FaPen, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  archiveNote,
  deleteAllNotes,
  deleteNote,
} from "../../redux/notesSlice";
import { Note } from "../../utils/Note";

interface NotesControlsProps {
  note?: Note;
  showArchived?: () => void;
  handleEditNote?: (note: Note) => void;
}

export const NotesControls = ({
  showArchived,
  note,
  handleEditNote,
}: NotesControlsProps): React.JSX.Element | null => {
  const dispatch = useDispatch();

  const onEditNote = (note: Note) => {
    handleEditNote && handleEditNote(note);
  };
  const handleDeleteAll = () => {
    dispatch(deleteAllNotes());
  };

  const handleDeleteNote = () => {
    if (note) {
      dispatch(deleteNote(note.id));
    }
  };

  const handleArchiveNote = () => {
    if (note) {
      dispatch(archiveNote(note.id));
    }
  };

  if (note) {
    return (
      <div className="flex w-32 justify-end">
        <button
          className="mr-1.5"
          onClick={() => onEditNote(note)}
          aria-label="Edit Note">
          <IconContext.Provider value={{ color: "#4b5563", size: "2rem" }}>
            <FaPen></FaPen>
          </IconContext.Provider>
        </button>
        <button
          className="mr-1.5"
          onClick={handleArchiveNote}
          aria-label="Archive Note">
          <IconContext.Provider value={{ color: "#4b5563", size: "2rem" }}>
            <FaArchive></FaArchive>
          </IconContext.Provider>
        </button>
        <button
          className=""
          onClick={handleDeleteNote}
          aria-label="Delete Note">
          <IconContext.Provider value={{ color: "#4b5563", size: "2rem" }}>
            <FaTrash></FaTrash>
          </IconContext.Provider>
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-32 justify-end">
      {showArchived && (
        <button
          className="mr-1.5"
          onClick={showArchived}
          aria-label="Show Archived Notes">
          <IconContext.Provider value={{ color: "white", size: "2rem" }}>
            <FaArchive></FaArchive>
          </IconContext.Provider>
        </button>
      )}

      <button aria-label="Delete" onClick={handleDeleteAll}>
        <IconContext.Provider value={{ color: "white", size: "2rem" }}>
          <FaTrash></FaTrash>
        </IconContext.Provider>
      </button>
    </div>
  );
};
