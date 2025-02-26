import React, { useState } from "react";
import { TbHttpDelete } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addInitial} from "../ReduxSlice/noteSlice";
import { useModal } from "../modalContext";
import Form from "./Form";
import axios from "axios";

const Card = ({ notes }) => {
  const { showModal, closeModal, openModal } = useModal();
  const dispatch = useDispatch();
  const handleDelte = () => {
    try {
      axios
        .delete(`http://localhost:8080/note/${notes.id}`)
        .then((res) => dispatch(addInitial(res.data)));
    } catch (error) {
      console.log("some error occur " + error);
    }
  };

  return (
    <div className="card-container d-flex align-items-center p-3 border rounded">
      {/* Left Section: Title & Paragraph */}
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="m-0 text-white">{notes.title.length >= 10 ? notes.title.slice(0,15).concat('...'): notes.title}</h5>
          <TbHttpDelete color="red" size={30} onClick={handleDelte} />
        </div>
        <p className="text-secondary">{notes.note.length >= 30 ? notes.note.slice(0,30).concat('....'): notes.note}</p>

        {/* Buttons */}
        <div className="d-flex justify-content-around">
          <button
            className="btn btn-outline-info fw-bold px-4"
            onClick={() => openModal(notes, true)}
          >
            Edit
          </button>
          <button className="btn btn-outline-warning fw-bold px-4">Read</button>
        </div>
      </div>
      <Form
        showModal={showModal}
        isUpdate
        notes={notes}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Card;
