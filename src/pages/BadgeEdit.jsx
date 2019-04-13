import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";

import header from "../images/badge-header.svg";
import "./styles/BadgeEdit.css";
import api from "./../api";
import md5 from "md5";

export default class BadgeEdit extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "Designer",
      twitter: "",
      avatarUrl: ""
    },
    loading: true,
    error: null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
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
    this.setState({ loading: true, error: null });

    try {
      const { form } = this.state;
      form.avatarUrl = `https://s.gravatar.com/avatar/${md5(
        form.email
      )}?s=80%22`;
      await api.badges.update(this.props.match.params.badgeId, form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    const { form, loading, error } = this.state;

    if (loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
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
                avatarUrl={`https://s.gravatar.com/avatar/${md5(
                  form.email
                )}?s=80%22`}
              />
            </div>

            <div className="col">
              <BadgeForm
                title="Edit Attendant"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={form}
                error={error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
