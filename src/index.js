import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

import "./global.css";
import "bootstrap/dist/css/bootstrap.css";
// const element = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Hola, soy Richard"),
//   React.createElement("p", {}, "Soy ingeniero de la web.")
// );
const container = document.getElementById("app");

ReactDOM.render(<Badges />, container);
