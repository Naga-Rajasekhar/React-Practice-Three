import React from "react";

function Cards(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.imgAdd} alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text" style={{ color: "red" }}>
          {props.testing}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Cards;
