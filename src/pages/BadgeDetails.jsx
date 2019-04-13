import React from "react";
import ReactDOM from "react-dom";

import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";

const BadgeDetails = ({ badge }) => (
  <div>
    <div className="BadgeDetails__hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              className="img-fluid"
              src={confLogo}
              alt="Logo de la conferencia"
            />
          </div>
          <div className="col-12 col-md-6 text-center BadgeDetails__hero-attendant-name">
            <h1>
              {badge.firstName} {badge.lastName}
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col">
          <Badge
            firstName={badge.firstName}
            lastName={badge.lastName}
            jobTitle={badge.jobTitle}
            twitter={badge.twitter}
            email={badge.email}
            avatarUrl={badge.avatarUrl}
          />
        </div>
        <div className="col">
          <h2>Actions</h2>
          <div>
            <div>
              <Link className="btn btn-primary mb-2" to={`/badges/${badge.id}`}>
                Edit
              </Link>
            </div>

            <div>
              {/* <button onClick={this.openModal} className="btn btn-danger">
                Delete
              </button> */}
              {ReactDOM.createPortal(
                <h1>Estoy fuera de todo</h1>,
                document.getElementById("modal")
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BadgeDetails;
