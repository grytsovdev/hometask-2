import { useState } from "react";
import ReactDOM from "react-dom";
import { Note } from "../../utils/Note";
import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  onAddNote: (note: Note) => void;
}

export const Modal = ({ isOpen, close, onAddNote }: ModalProps) => {
  const portal = document.getElementById("portal")!;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    if (title.length > 0 && category.length > 0 && body.length > 0) {
      const id = Math.random();
      const newNote = new Note(id, title, body, category);
      onAddNote(newNote);
      setTitle("");
      setBody("");
      setCategory("");
      close();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
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
            Add note
          </button>
        </div>
      </div>
    </div>,
    portal
  );
};
