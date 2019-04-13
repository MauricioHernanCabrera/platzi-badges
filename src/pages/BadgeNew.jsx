import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

export default class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "Designer",
      twitter: ""
    }
  };

  handleChange = ({ target: { value, name } }) => {
    console.log("Entro");
    console.log(value, name);
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  };

  render() {
    const { form } = this.state;
    return (
      <div>
        <Navbar />

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
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
              <BadgeForm onChange={this.handleChange} formValues={form} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
