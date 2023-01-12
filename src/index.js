import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Navbar from "./navbar";
import Cards from "./cards";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App name="Raj"></App>
    <Navbar></Navbar>
    <Cards imgAddr="https://images.pexels.com/photos/5623798/pexels-photo-5623798.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load..."></Cards>
    <Cards imgAdd="https://images.pexels.com/photos/14894303/pexels-photo-14894303.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Cards>
  </div>
);
