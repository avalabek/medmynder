import React from 'react';
import "./Signup.css";


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: '', 
      lastName: '',
      phone:'', 
      email: '', 
      password: '',
      dateOfBirth: '',
      notes: ''
     };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // handleSignup(event) {
  //   event.preventDefault();
  //   this.props.dispatch(signup(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.dateOfBirth, this.state.notes));
  // }

  
  render() {
    return (
      
      <form>
        <br /> <br />
        <div className="row" >
        <div className="col s3" />
        <div className="col s9">
          {/* <form className="col s12" > */}
            
              <div className="input-field col s4" >
                <input id="first_name" type="text" className="validate" />
                  <label for="first_name">First Name</label>
            </div>
          
        
            <div className="input-field col s4">
              <input id="last_name" type="text" className="validate" />
                <label for="last_name">Last Name</label>
            </div>
            {/* </form> */}
            
              
                <div className="input-field col l8">
                  <input  id="phone" type="text" className="validate" />
                    <label for="phone">Phone</label>
        </div>
                
                
                  <div className="input-field col l8">
                    <input id="dateOfBirth" type="text" className="validate" />
                      <label for="dateOfBirth">Date of birth</label>
        </div>
                  
                  
                    <div className="row">
                      <div className="col s12">
                        
          <div className="input-field inline col s4" >
                          <input id="email_inline" type="email" className="validate" />
                            <label for="email_inline">Email</label>
                            <span className="helper-text" data-error="wrong" data-success="right">Use your email to login next time</span>
          </div>
            <div className="input-field inline col s4" >
              <input id="password_inline" type="text" className="validate" />
              <label for="password_inline">Choose a password</label>
              <span className="helper-text" data-error="wrong" data-success="right">Pick an easy password!</span>
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
                      </form>
      
    
    )
  }
}



export default Signup;
