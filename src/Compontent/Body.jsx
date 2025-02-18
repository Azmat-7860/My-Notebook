import React from "react";
import Form from "./Form";
import { useModal } from "../modalContext";
import Cards from "./Cards";
import { useSelector } from "react-redux";
import Page from "./Page";

const Body = () => {
  const { showModal, closeModal } = useModal();
// const notes = useSelector((store) => store.note.notes);
//   console.log(notes);;
  const notes = useSelector((store) => store.note.notes)
  // console.log(notes.length);
  
  return (
    <div className="body-container container position-relative ">
      <Form showModal={showModal} closeModal={closeModal} />
      {notes.length >= 1 ?<Cards/> :<Page/>}
      {/* <Cards /> */}

    </div>
  );
};

export default Body;
