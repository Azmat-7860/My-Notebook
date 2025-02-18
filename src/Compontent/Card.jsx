import React from "react";
import { TbHttpDelete } from "react-icons/tb";

const Card = ({ title, paragraph, onClose, onEdit, onRead }) => {
  return (
    <div className="card-container d-flex align-items-center p-3 border rounded">
      {/* Left Section: Title & Paragraph */}
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="m-0 text-white">Tittle</h5>
          <TbHttpDelete color="red" size={30} onClick={onClose} />
        </div>
        <p className="text-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          excepturi optio odio dolore eligendi, illo ipsum eos labore neque
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-around">
          <button className="btn  btn-outline-info fw-bold px-4" onClick={onEdit}>
            Edit
          </button>
          <button className="btn btn-outline-warning fw-bold px-4" onClick={onRead}>
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
