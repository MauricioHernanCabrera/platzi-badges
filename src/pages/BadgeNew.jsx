import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import api from "./../api";

export default class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "Designer",
      twitter: ""
    },
    loading: false,
    error: null
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const { form } = this.state;
      await api.badges.create(form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    const { form } = this.state;
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={form.firstName}
                lastName={form.lastName}
                jobTitle={form.jobTitle}
                twitter={form.twitter}
                email={form.email}
                avatarUrl="https://www.gravatar.com/avatar?id=identicon"
              />
            </div>

            <div className="col">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
