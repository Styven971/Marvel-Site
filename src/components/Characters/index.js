import React from "react";
import Card from "../Card";

import './index.css'

const Characters = (props) => {
  return (
    <div className="CharactersContainer">
      {props.data.map((characters) => {
        console.log(characters)
        return <Card name={characters.name} imageUrl={characters.url} />;
      })}
    </div>
  );
}
export default Characters;