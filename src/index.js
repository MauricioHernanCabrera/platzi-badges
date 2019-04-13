import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badge";
import "./global.css";
import "bootstrap/dist/css/bootstrap.css";
// const element = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Hola, soy Richard"),
//   React.createElement("p", {}, "Soy ingeniero de la web.")
// );
const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    firstName="Lilly"
    lastName="Kaufman"
    jobTitle="Frontend engineer"
    twitter="sparragus"
    avatarUrl="https://www.gravatar.com/avatar?id=identicon"
  />,
  container
);
