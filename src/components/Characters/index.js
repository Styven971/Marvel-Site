import React from "react";
import Card from "../Card";


import './index.css'

const Characters = (props) => {
  return (
    <div className="CharactersContainer">
      {props.data.map((characters) => {
        console.log(characters)
        return <Card name={characters.name} biographie={characters.biographie} imageUrl={characters.url} character={characters}/>;
      })}
    </div>
  );
}
export default Characters;