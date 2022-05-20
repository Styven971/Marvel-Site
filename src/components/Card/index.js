const Card = (props) => {
    return (
      <div className="card">
        <img src={props.imageUrl} />
        <span className="heroes"> {props.name} </span>
      </div>
    );
  };
  
  export default Card;