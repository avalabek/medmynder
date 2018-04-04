import React from "react";
import "./Signup.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      dateOfBirth: ""
    };
  }
  //TODO update below to ES^6
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleFormSubmit = event => {
    event.preventDefault();
    //send to database
    API.saveUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      dateOfBirth: this.state.dateOfBirth
    })
      //the below is probably not needed==load user
      .then(res => this.loadUser())
      .catch(err => console.log(err));
  };

  // handleSignup(event) {
  //   event.preventDefault();
  //   this.props.dispatch(signup(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.dateOfBirth, this.state.notes));
  // }

  render() {
    return (
      <form onSubmit={this.handleChange.bind(this)}>
        <br /> <br />
        <div className="row">
          <div className="col s3" />
          <div className="col s9">
            {/* <form className="col s12" > */}

            <div className="input-field col s4">
              <input
                id="first_name"
                type="text"
                className="validate"
                value={this.state.firstName}
                onChange={this.handleChange.bind(this)}
              />
              <label for="first_name">First Name</label>
            </div>

            <div className="input-field col s4">
              <input
                id="last_name"
                type="text"
                className="validate"
                value={this.state.lastName}
                onChange={this.handleChange.bind(this)}
              />
              <label for="last_name">Last Name</label>
            </div>
            {/* </form> */}

            <div className="input-field col l8">
              <input
                id="phone"
                type="text"
                className="validate"
                value={this.state.phone}
                onChange={this.handleChange.bind(this)}
              />
              <label for="phone">Phone</label>
            </div>

            <div className="input-field col l8">
              <input
                id="dateOfBirth"
                type="text"
                className="validate"
                value={this.state.dateOfBirth}
                onChange={this.handleChange.bind(this)}
              />
              <label for="dateOfBirth">Date of birth</label>
            </div>

            <div className="row">
              <div className="col s12">
                <div className="input-field inline col s4">
                  <input
                    id="email_inline"
                    type="email"
                    className="validate"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                  />
                  <label for="email_inline">Email</label>
                  <span
                    className="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    Use your email to login next time
                  </span>
                </div>
                <div className="input-field inline col s4">
                  <input
                    id="password_inline"
                    type="text"
                    className="validate"
                    value={this.state.password_inline}
                    onChange={this.handleChange.bind(this)}
                  />
                  <label for="password_inline">Choose a password</label>
                  <span
                    className="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    Pick an easy password!
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label for="email">Email</label>
          </div>
        </div> */}
        </div>
        <a class="waves-effect waves-light btn submit">Submit</a>
      </form>
    );
  }
}

export default Signup;
