import React from "react";

export default class BadgeForm extends React.Component {
  handleChange = ({ target: { value, name } }) => {
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log("Button was clicked");
  //   console.log(this.state);
  // };

  render() {
    const { formValues: form, onChange, onSubmit, error, title } = this.props;
    return (
      <div>
        <h1>{title}</h1>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>First name</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={form.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={form.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={onChange}
              className="form-control"
              type="email"
              name="email"
              value={form.email}
            />
          </div>

          <div className="form-group">
            <label>Job title</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={form.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={form.twitter}
            />
          </div>

          {error && <p className="text-danger">{error.message}</p>}
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}
