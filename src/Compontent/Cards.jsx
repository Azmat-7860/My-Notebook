import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useModal } from "../modalContext";

const Cards = () => {
  const { text } = useModal();
  // console.log(text);
  const notes = useSelector((store) => store.note.notes);
  let updateNote;
  
  if (text.length === 0) {
    updateNote = notes; 
  } else {
    updateNote = notes.filter((note) =>
      note.title.toLowerCase().includes(text.toLowerCase())
    );
  }
  
  
  return (
    <div className="container d-flex flex-wrap justify-content-center gap-3">
      {updateNote.map((ele) => {
        return <Card notes={ele} key={ele.id} />;
      })}
    </div>
  );
};

export default Cards;
