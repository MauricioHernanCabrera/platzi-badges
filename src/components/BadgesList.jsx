import React from "react";

import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
  render() {
    const { badge } = this.props;
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={badge.avatarUrl}
          alt={`${badge.firstName} ${badge.lastName}`}
        />

        <div>
          <strong>
            {badge.firstName} {badge.lastName}
          </strong>
          <br />@{badge.twitter}
          <br />
          {badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    const { badges } = this.props;
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
