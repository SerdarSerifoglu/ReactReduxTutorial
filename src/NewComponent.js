import React from "react";
import { useDispatch } from "react-redux";
import { addObject } from "./store/actions/objectActions";

export default function NewComponent() {
  const dispatch = useDispatch();

  const handleAddToObject = (object) => {
    dispatch(addObject(object));
  };
  return (
    <div>
      <hr></hr>
      <h1>New Component</h1>
      <button
        onClick={() => {
          handleAddToObject({ id: "2", name: "serdar", count: 1, customer: {} });
        }}
      >
        Serdar
      </button>
    </div>
  );
}
