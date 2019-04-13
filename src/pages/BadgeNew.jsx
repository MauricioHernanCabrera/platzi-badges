import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

export default class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Lilly"
                lastName="Kaufman"
                jobTitle="Frontend engineer"
                twitter="sparragus"
                avatarUrl="https://www.gravatar.com/avatar?id=identicon"
              />
            </div>

            <div className="col">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
