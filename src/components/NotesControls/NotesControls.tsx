import React from "react";
import { useDispatch } from "react-redux";
import {
  archiveNote,
  deleteAllNotes,
  deleteNote,
} from "../../redux/notesSlice";
import { Note } from "../../utils/Note";
import "./NotesControls.scss";

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
      <div className="controls-wrapper">
        <button
          className="edit-button"
          onClick={() => onEditNote(note)}
          aria-label="Edit Note"></button>
        <button
          className="archive-button black"
          onClick={handleArchiveNote}
          aria-label="Archive Note"></button>
        <button
          className="delete-button black"
          onClick={handleDeleteNote}
          aria-label="Delete Note"></button>
      </div>
    );
  }

  return (
    <div className="controls-wrapper">
      {showArchived && (
        <button
          className="archive-button"
          onClick={showArchived}
          aria-label="Show Archived Notes"></button>
      )}

      <button
        className="delete-button"
        aria-label="Delete"
        onClick={handleDeleteAll}></button>
    </div>
  );
};
