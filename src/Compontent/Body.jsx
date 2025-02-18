import React from "react";
import Form from "./Form";
import { useModal } from "../modalContext";
import Cards from "./Cards";

const Body = () => {
  const { showModal, closeModal } = useModal();
  return (
    <div className="body-container container position-relative ">
      <Form showModal={showModal} closeModal={closeModal} />
      <Cards />

    </div>
  );
};

export default Body;
