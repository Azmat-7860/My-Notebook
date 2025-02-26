import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInitial } from "../ReduxSlice/noteSlice";

const FetchingItem = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    fetch("http://localhost:8080/allnote")
      .then((res) => res.json())
      .then((data) => dispatch(addInitial(data)))
      .catch((err) => console.log(err));

    return () => {
      controller.abort;
    };
  }, [dispatch]);

  return <></>;
};

export default FetchingItem;
