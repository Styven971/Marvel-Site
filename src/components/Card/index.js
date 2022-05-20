import { useState } from "react";

const Card = (props) => {
  const [show, setShow] = useState(false);

    return (
      <> 
      <div className="card" onClick={() => {
        setShow(true);
      }}>
        <img src={props.imageUrl} />
        <span className="heroes"> {props.name} </span>
      </div>
       {show === true ? (
        <Modale character={props.character} setShow={setShow} />
      ) : null}
      </>
    );
  };
  
  export default Card;