import React from "react";

function Cards({
  imgAdd = "https://images.pexels.com/photos/14413791/pexels-photo-14413791.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  testing = "Naga",
  buttonText = "SurName",
}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgAdd} alt="..."></img>
      <div className="card-body">
        <h5 className="card-title" style={{ color: "black" }}>
          Card title
        </h5>
        <p className="card-text" style={{ color: "red" }}>
          {testing}
        </p>
        <a href="#" className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default Cards;
