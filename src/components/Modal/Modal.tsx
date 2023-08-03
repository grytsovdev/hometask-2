import { useEffect, useState } from "react";
import { Note } from "../../utils/Note";
import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  isEditing: boolean;
  noteToEdit: Note | null;
  close: () => void;
  onAddNote: (note: Note) => void;
  onEditNote: (editedNote: Note) => void;
}

export const Modal = ({
  isOpen,
  close,
  onAddNote,
  noteToEdit,
  onEditNote,
  isEditing,
}: ModalProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setCategory(noteToEdit.category);
      setBody(noteToEdit.body);
    }
  }, [noteToEdit]);

  const handleSubmit = () => {
    if (title.trim() === "" || category.trim() === "" || body.trim() === "") {
      return;
    }

    if (isEditing && noteToEdit) {
      const editedNote = new Note(
        noteToEdit.id,
        title,
        body,
        category,
        noteToEdit.createdDate,
        noteToEdit.archived
      );
      onEditNote(editedNote);
    } else {
      const id = Math.random();
      const newNote = new Note(id, title, body, category);
      onAddNote(newNote);
    }

    setTitle("");
    setBody("");
    setCategory("");
    close();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="note-input-wrapper">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Name of your note"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}>
            <option value="" disabled>
              Choose category
            </option>
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
          </select>
        </div>
        <textarea
          className="note-body"
          typeof="text"
          name="content"
          placeholder="Write your note here"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}></textarea>
        <div className="modal-buttons-wrapper">
          <button className="modal-cancel" onClick={close}>
            Cancel
          </button>
          <button className="modal-submit" onClick={handleSubmit}>
            {noteToEdit && isEditing ? "Save note" : "Add note"}
          </button>
        </div>
      </div>
    </div>
  );
};
