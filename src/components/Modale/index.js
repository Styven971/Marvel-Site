import "./index.css";

const Modale = (props) => {
  return (
    <div
      onClick={() => {
        props.setShow(false);
      }}
      className="modale"
    >
      <img src={props.character.image} />
      <div>Nom : {props.character.name}</div>
    </div>
  );
};

export default Modale;