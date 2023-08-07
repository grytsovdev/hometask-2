import React from "react";
import { NotesControls } from "../NotesControls/NotesControls";

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
      <div className="flex justify-between h-16 px-4 bg-blue-500 text-white">
        <p className="note-item w-64 leading-[4rem] font-bold">Name</p>
        <p className="note-item leading-[4rem] font-bold">Created </p>
        <p className="note-item leading-[4rem] font-bold">Category</p>
        <p className="note-item leading-[4rem] font-bold">Content</p>
        <p className="note-item leading-[4rem] font-bold">Dates</p>
        <NotesControls showArchived={showArchived}></NotesControls>
      </div>
    );
  return (
    <div className="flex justify-around h-16 px-4 bg-blue-500 text-white">
      <p className="note-item leading-[4rem] font-bold ">Category</p>
      <p className="note-item leading-[4rem] font-bold">Active</p>
      <p className="note-item leading-[4rem] font-bold">Archived</p>
    </div>
  );
};
