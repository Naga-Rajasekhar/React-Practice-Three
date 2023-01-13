import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Navbar from "./navbar";
import Cards from "./cards";
import Counter from "./counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App name="Raj"></App>
    <Navbar></Navbar>
    <Cards
      imgAdd="https://images.pexels.com/photos/5623798/pexels-photo-5623798.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load..."
      testing="Raja"
      buttonText="FirstName"
    ></Cards>
    <Cards
      imgAdd="https://images.pexels.com/photos/9866795/pexels-photo-9866795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      testing="Sekhar"
      buttonText="MiddleName"
    ></Cards>
    <Cards></Cards>
    <Counter></Counter>
  </div>
);
