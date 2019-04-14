import React from "react";

import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";
import { Link } from "react-router-dom";

const useIncreaseCount = max => {
  const [count, setCount] = React.useState(0);

  if (count > max) {
    setCount(0);
  }

  return [count, setCount];
};

const BadgeDetails = ({
  badge,
  onCloseModal,
  onOpenModal,
  modalIsOpen,
  onDeleteBadge
}) => {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useIncreaseCount(5);

  return (
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
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="btn btn-primary mr-2"
                >
                  Increase Count {count}
                </button>

                <Link
                  className="btn btn-primary mb-2"
                  to={`/badges/${badge.id}`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <button onClick={onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={modalIsOpen}
                  onClose={onCloseModal}
                  onDeleteBadge={onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeDetails;
