import React, { useState } from "react";
import { TbHttpDelete } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { dltNote } from "../ReduxSlice/noteSlice";
import { useModal } from "../modalContext";
import Form from "./Form";

const Card = ({ notes }) => {
  const { showModal, closeModal,openModal } = useModal();
  const dispatch = useDispatch();
  const handleDelte = () => {
    // console.log("button is working"+notes.id);
    dispatch(
      dltNote({
        id: notes.id,
      })
    );
  };

  return (
    <div className="card-container d-flex align-items-center p-3 border rounded">
      {/* Left Section: Title & Paragraph */}
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="m-0 text-white">{notes.title}</h5>
          <TbHttpDelete color="red" size={30} onClick={handleDelte} />
        </div>
        <p className="text-secondary">{notes.note}</p>

        {/* Buttons */}
        <div className="d-flex justify-content-around">
        <button className="btn btn-outline-info fw-bold px-4" onClick={() => openModal(notes, true)}>Edit</button>
          <button className="btn btn-outline-warning fw-bold px-4">Read</button>
        </div>
      </div>
      <Form showModal={showModal} isUpdate notes={notes} closeModal={closeModal} />
    </div>
  );
};

export default Card;
