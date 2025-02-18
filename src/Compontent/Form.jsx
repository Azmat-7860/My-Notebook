import React from "react";
import { FaTimes } from "react-icons/fa"; // Importing Close Icon

const Form = ({ showModal, closeModal }) => {
  const handleSubmit = (formData) => {
    closeModal();
    const formInput = Object.fromEntries(formData.entries());
    console.log(formInput);
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content align-items-center">
        {/* Modal Header with Close Icon */}

        {/* Form */}
        <form
          action={handleSubmit}
          className="contact-form d-flex justify-content-center align-items-center flex-column"
        >
          {" "}
          <div className=" w-100 d-flex justify-content-between align-items-center px-3">
            <h4 className="text-white fw-bold mt-1">Create a New Post</h4>
            <FaTimes size={28} color="white" onClick={closeModal} />
          </div>
          <input
            type="text"
            placeholder="Topic Name "
            name="topic"
            autoComplete="off"
            required
          />
          <textarea
            name="paragraph"
            placeholder="Type your paragraph"
            rows={5}
          ></textarea>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
