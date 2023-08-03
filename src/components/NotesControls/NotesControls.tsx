import React from "react";
import { useDispatch } from "react-redux";
import { archiveNote, deleteNote } from "../../redux/notesSlice";
import "./NotesControls.scss";

interface NotesControlsProps {
  noteId?: number;
  isHeader?: boolean;
  showArchived?: () => void;
}

export const NotesControls = ({
  isHeader,
  showArchived,
  noteId = 0,
}: NotesControlsProps): React.JSX.Element | null => {
  const dispatch = useDispatch();

  const handleDeleteNote = (noteId: number) => {
    dispatch(deleteNote(noteId));
  };

  const handleArchiveNote = (noteId: number) => {
    dispatch(archiveNote(noteId));
  };

  if (isHeader) {
    return (
      <div className="controls-wrapper">
        {showArchived && (
          <button className="archive-button" onClick={showArchived}></button>
        )}
        <button className="delete-button"></button>
      </div>
    );
  }

  return (
    <div className="controls-wrapper">
      <button className="edit-button"></button>
      <button
        className="archive-button black"
        onClick={() => handleArchiveNote(noteId)}></button>
      <button
        className="delete-button black"
        onClick={() => handleDeleteNote(noteId)}></button>
    </div>
  );
};
