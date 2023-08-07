import { useEffect, useState } from "react";
import { Note } from "../../utils/Note";

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
    <div className="container w-full bg-black bg-opacity-20 fixed top-0 bottom-0 left-0 right-0  grid place-items-center max-w-full outline-none">
      <div className="container flex flex-col w-[700px] bg-white rounded-xl overflow-auto p-8">
        <div className="w-full mb-5 flex justify-between">
          <input
            className="w-2/5 h-10 border-2 border-solid border-gray-300 rounded-lg px-3 outline-none bg-transparent text-gray-600 placeholder:text-gray-600 "
            type="text"
            name="title"
            id="title"
            placeholder="Name of your note"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            className="w-2/5 h-10 border-2 border-solid border-gray-300 rounded-lg px-3 outline-none bg-transparent text-gray-600 placeholder:text-gray-600 "
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
          className="h-[60vh] resize-none border-2 border-solid border-gray-300 rounded-lg overflow-auto p-3 mb-5 outline-none text-gray-600 placeholder:text-gray-600"
          typeof="text"
          name="content"
          placeholder="Write your note here"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}></textarea>
        <div className="flex justify-end">
          <button
            className="w-28 h-10 mr-6 bg-red-500 rounded-lg text-white hover:bg-red-700"
            onClick={close}>
            Cancel
          </button>
          <button
            className="w-28 h-10  bg-green-600 rounded-lg text-white hover:bg-green-700"
            onClick={handleSubmit}>
            {noteToEdit && isEditing ? "Save note" : "Add note"}
          </button>
        </div>
      </div>
    </div>
  );
};
