import Card from "../Card";
import { useState } from "react";
import "./index.css";

const Modale = (props) => {
  return (
    <div
      onClick={() => {
        props.setShow(false);
      }}
      className="modale"
    >
      <img src={props.imageUrl} />
      <div>Nom : {props.name}</div>
    </div>
  );
};

export default Modale;