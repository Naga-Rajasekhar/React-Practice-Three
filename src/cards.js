import React from "react";

function Cards(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://images.pexels.com/photos/5623798/pexels-photo-5623798.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load..."
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text" style={{ color: "red" }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Cards;
