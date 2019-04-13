import React from "react";
import confLogo from "../images/badge-header.svg";

export default class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div>
          <img src="https://www.gravatar.com/avatar?id=identicon" alt="" />
          <h1>
            Richard <br /> Kaufman
          </h1>
        </div>

        <div>
          <p>Frontend Engineer</p>
          <p>@asparragus</p>
        </div>
      </div>
    );
  }
}
