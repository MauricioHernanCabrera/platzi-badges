import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

export default class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?id=identicon"
            alt="Avatar"
          />
          <h1>
            Richard <br /> Kaufman
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@sparragus</div>
        </div>

        <div className="Badge__footer">asdas</div>
      </div>
    );
  }
}
