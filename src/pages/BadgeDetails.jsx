import React from "react";
import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";
import PageLoading from "./../components/PageLoading";
import PageError from "./../components/PageError";
import Badge from "./../components/Badge";
import api from "../api";
import { Link } from "react-router-dom";

export default class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    const { loading, error, data: badge } = this.state;

    if (loading) {
      return <PageLoading />;
    }

    if (error) {
      return <PageError />;
    }

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
                  <Link
                    className="btn btn-primary mb-2"
                    to={`/badges/${badge.id}`}
                  >
                    Edit
                  </Link>
                </div>

                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
