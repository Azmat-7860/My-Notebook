import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addNote, editNote } from "../ReduxSlice/noteSlice";
import { useModal } from "../modalContext";
import axios from "axios";

const Form = () => {
  const dispatch = useDispatch();
  const { showModal, closeModal, modalData, isUpdate } = useModal();

  // State for form inputs
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");

  // Fill form if editing
  useEffect(() => {
    if (isUpdate && modalData) {
      setTitle(modalData.title);
      setParagraph(modalData.note);
    } else {
      setTitle("");
      setParagraph("");
    }
  }, [isUpdate, modalData]);

  const handleSubmit = async (e) => {
    const noteData = {
      title,
      note: paragraph,
    };
    e.preventDefault();

    if (isUpdate) {
      try {
        const res = await axios.put(
          `http://localhost:8080/note/${modalData.id}`,
          noteData
        );

        dispatch(editNote(res.data));
      } catch (error) {
        console.log("Some error occurd " + error);
      }
    } 
    
    else {
      try {
        axios
          .post("http://localhost:8080/note", noteData)
          .then((response) => dispatch(addNote(response.data)));
      } catch (error) {
        console.log("Some error occur", error);
      }
    }

    closeModal(); // Close modal after submission
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay myModal position-absolute">
      <div className="modal-content align-items-center">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="d-flex justify-content-between px-3">
            <h4 className="text-white fw-bold">
              {isUpdate ? "Edit Note" : "Create Note"}
            </h4>
            <FaTimes size={28} color="white" onClick={closeModal} />
          </div>
          <input
            type="text"
            placeholder="Topic Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            rows={5}
            placeholder="Type your note..."
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
            required
          />
          <button type="submit">{isUpdate ? "Update" : "Save"}</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
