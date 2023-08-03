import React from "react";
import { useDispatch } from "react-redux";
import { archiveNote, deleteNote } from "../../redux/notesSlice";
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

  const handleDeleteNote = (noteId: number) => {
    dispatch(deleteNote(noteId));
  };

  const handleArchiveNote = (noteId: number) => {
    dispatch(archiveNote(noteId));
  };

  const onEditNote = (note: Note) => {
    handleEditNote && handleEditNote(note);
  };

  if (note) {
    return (
      <div className="controls-wrapper">
        <button
          className="edit-button"
          onClick={() => onEditNote(note)}></button>
        <button
          className="archive-button black"
          onClick={() => handleArchiveNote(note.id)}></button>
        <button
          className="delete-button black"
          onClick={() => handleDeleteNote(note.id)}></button>
      </div>
    );
  }

  return (
    <div className="controls-wrapper">
      {showArchived && (
        <button className="archive-button" onClick={showArchived}></button>
      )}
      <button className="delete-button"></button>
    </div>
  );
};
