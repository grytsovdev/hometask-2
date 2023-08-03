import React from "react";
import { NotesControls } from "../NotesControls/NotesControls";
import "./NotesHeader.scss";

interface NotesHeaderProps {
  showArchived: () => void;
}

export const NotesHeader = ({
  showArchived,
}: NotesHeaderProps): React.JSX.Element => {
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
};
