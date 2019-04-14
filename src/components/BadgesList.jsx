import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";

const useSearchBadges = badges => {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      const fullNameLower = `${badge.firstName} ${
        badge.lastName
      }`.toLowerCase();
      const queryLower = query.toLowerCase();
      return fullNameLower.includes(queryLower);
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return { query, filteredBadges, setQuery };
};

const BadgesList = ({ badges }) => {
  const { query, filteredBadges, setQuery } = useSearchBadges(badges);

  if (!filteredBadges.length) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badged/new">
          Create new Badges
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const BadgesListItem = ({ badge }) => {
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
};

export default BadgesList;
