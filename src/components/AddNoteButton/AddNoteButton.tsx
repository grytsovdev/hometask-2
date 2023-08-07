import React from "react";

interface AddNoteButtonProps {
  onClick: () => void;
}

export const AddNoteButton = ({
  onClick,
}: AddNoteButtonProps): React.JSX.Element => {
  return (
    <div className="flex justify-end my-10">
      <button
        className="w-52 h-12 bg-blue-900 rounded-lg text-white text-2xl shadow-lg hover:bg-blue-950"
        onClick={onClick}>
        Add Note
      </button>
    </div>
  );
};
