import React from "react";

export default class BadgeForm extends React.Component {
  handleChange = ({ target: { value, name } }) => {
    console.log(value, name);
  };

  handleClick = event => {
    event.preventDefault();
    console.log("Button was clicked");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleClick}>
          <div className="form-group">
            <label>First name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
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
