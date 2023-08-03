import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NotesState } from "../../redux/notesSlice";
import { Note } from "../../utils/Note";
import { NoteRow } from "../NoteRow/NoteRow";
import { NotesHeader } from "../NotesHeader/NotesHeader";
import "./NotesContainer.scss";

interface NotesContainerProps {
  setHeader?: (header: string) => void;
  handleEditNote?: (note: Note) => void;
}

interface NotesStats {
  [category: string]: {
    active: number;
    archived: number;
  };
}

export const NotesContainer = ({
  setHeader = () => {},
  handleEditNote,
}: NotesContainerProps): React.JSX.Element => {
  const notes = useSelector((state: NotesState) => state.notes);
  const [showArchived, setShowArchived] = useState(false);

  const toggleShowArchived = () => {
    setShowArchived((prevShowArchived) => !prevShowArchived);
    setHeader(showArchived ? "Your notes" : "Archived notes");
  };
  const sortNotes = (notes: Note[]) => {
    return [...notes].sort((a, b) => {
      const dateA = a.createdDate.split("/").reverse().join("");
      const dateB = b.createdDate.split("/").reverse().join("");
      return dateB.localeCompare(dateA);
    });
  };

  const sortedNotes = sortNotes(notes);

  const filterNotes = (note: Note) =>
    showArchived ? note.archived : !note.archived;

  const filteredNotes = sortedNotes.filter(filterNotes);

  const getNotesStats = () => {
    const notesStats: NotesStats = {
      Task: { active: 0, archived: 0 },
      Idea: { active: 0, archived: 0 },
      "Random Thought": { active: 0, archived: 0 },
    };

    notes.forEach((note) => {
      const { category, archived } = note;
      if (!archived) notesStats[category].active++;
      else notesStats[category].archived++;
    });

    return notesStats;
  };

  if (handleEditNote) {
    return (
      <div className="notes-table">
        <NotesHeader showArchived={toggleShowArchived} />
        {filteredNotes.map((note) => (
          <NoteRow key={note.id} note={note} setNoteToEdit={handleEditNote} />
        ))}
      </div>
    );
  }

  const notesStats = getNotesStats();

  return (
    <div className="notes-table">
      <NotesHeader isStats={true} />
      {Object.entries(notesStats).map(([category, { active, archived }]) => (
        <NoteRow
          key={category}
          category={category}
          active={active}
          archived={archived}
        />
      ))}
    </div>
  );
};
