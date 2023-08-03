import React from "react";
import "./AddNoteButton.scss";

interface AddNoteButtonProps {
  onClick: () => void;
}

export const AddNoteButton = ({
  onClick,
}: AddNoteButtonProps): React.JSX.Element => {
  return (
    <div className="button-wraper">
      <button className="add-note-button" onClick={onClick}>
        Add Note
      </button>
    </div>
  );
};
