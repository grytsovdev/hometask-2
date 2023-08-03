import React from "react";
import { NotesControls } from "../NotesControls/NotesControls";
import "./NotesHeader.scss";

interface NotesHeaderProps {
  showArchived?: () => void;
  isStats?: boolean;
}

export const NotesHeader = ({
  showArchived,
  isStats = false,
}: NotesHeaderProps): React.JSX.Element => {
  if (!isStats)
    return (
      <div className="notes-header">
        <p>Name</p>
        <p>Created</p>
        <p>Category</p>
        <p>Content</p>
        <p>Dates</p>
        <NotesControls showArchived={showArchived}></NotesControls>
      </div>
    );
  return (
    <div className="notes-header stats">
      <p>Category</p>
      <p>Active</p>
      <p>Archived</p>
    </div>
  );
};
