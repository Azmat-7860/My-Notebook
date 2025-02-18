import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const Cards = () => {
  const notes = useSelector((store) => store.note.notes);
  // console.log(notes);
  

  return (
    <div className="container d-flex flex-wrap justify-content-center gap-3">
      {notes.map((ele) => {
        return <Card notes={ele} key={ele.id}/>;
      })}
    </div>
  );
};

export default Cards;
