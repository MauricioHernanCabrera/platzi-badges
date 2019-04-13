import React from "react";
import { Link } from "react-router-dom";

import BadgesList from "./../components/BadgesList";
import PageLoading from "./../components/PageLoading";
import PageError from "./../components/PageError";

import "./styles/Badges.css";

import confLogo from "./../images/badge-header.svg";
import api from "./../api";

export default class Badges extends React.Component {
  state = {
    data: [],
    error: null,
    loading: true,
    timeoutId: null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();

      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <PageLoading />;
    }

    if (error) {
      return <PageError error={error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges__conf-logo" src={confLogo} alt="" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge container
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
