
import "./index.css";

const Modale = (props) => {
  return (
    <div
      onClick={() => {
        props.setShow(true);
      }}
      className="modale"
    >
      <img src={props.imageUrl} />
      <div>Nom : {props.name}</div>
    </div>
  );
};

export default Modale;