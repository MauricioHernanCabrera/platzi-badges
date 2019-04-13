import React from "react";

export default class BadgeForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "Designer",
    twitter: ""
  };

  handleChange = ({ target: { value, name } }) => {
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Button was clicked");
    console.log(this.state);
  };

  render() {
    const { firstName, lastName, email, jobTitle, twitter } = this.state;
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={firstName}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="lastName"
              value={lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Job title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="twitter"
              value={twitter}
            />
          </div>

          {/* type="button"
          onClick={this.handleClick} */}
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}
