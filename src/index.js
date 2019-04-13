import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badge";

// const element = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Hola, soy Richard"),
//   React.createElement("p", {}, "Soy ingeniero de la web.")
// );
const container = document.getElementById("app");

ReactDOM.render(<Badge />, container);
