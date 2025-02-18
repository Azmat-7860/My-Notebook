import React from "react";
import Form from "./Form";
import { useModal } from "../modalContext";
import Card from "./Card";

const Body = () => {
    const {showModal,closeModal} = useModal();
  return (
    <div className="body-container container border border-black ">
   <Card/>
     <Form showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default Body;
