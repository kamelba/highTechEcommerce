import React, { Component } from 'react'
import registerLogo from '../image/register.svg' 
import{addUser} from '../redux/action/action'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
    username: "",
    email: "",
    password: '',
    usernameError: "",
    emailError: "",
    passwordError: ""     
};
  

class Register extends Component {
    state = initialState;


        HandleChange = e =>{
            const isCheckbox= e.target.type ==="checkbox";
            this.setState({
                [e.target.name]: isCheckbox 
                ?e.target.checked 
                :e.target.value
            })
      };

      validate = () => {
        let usernameError = "";
        let emailError = "";
        // let passwordError = "";
    
        if (this.state.username.length==0) {
            usernameError = "name cannot be blank";
        }
    
        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }
    
        if (emailError || usernameError) {
          this.setState({ emailError, usernameError });
          return false;
        }
    
        return true;
      };
    
      handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
          console.log(this.state);
          // clear form
          this.setState(initialState);
        }
      };
    
    render() {

        return (
            
            <div className="stylingForm">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 leftSide">
                            <img src={registerLogo} alt="register-photo"/>
                        </div>
                        <div className="col-xs-12 col-sm-6 rightSide">
                            <h1>Créez votre compte</h1>
<form enctype='application/json' onSubmit={this.handleSubmit}>
                                <div className="form-group has-feedback">
                                    <label for="username">Username</label>
                                    <input type="text" className="form-control"  id="username" placeholder="Enter your name" name="username" onChange={this.HandleChange}/>
                                    <div style={{fontSize: 12 , color: "red"}}>{this.state.usernameError}</div>
                                    <span className="glyphicon 
                                    glyphicon-user form-control-feedback" aria-hidden="true"></span>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter your Email" name="email" onChange={this.HandleChange}/>
                                  <div style={{fontSize: 12 , color: "red"}}>{this.state.emailError}</div>
                                    <span className="glyphicon 
                                    glyphicon-envelope form-control-feedback" aria-hidden="true"></span>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="password">Mot de passe</label>
                                    <input type="password" className="form-control" id="password" placeholder="Tapez votre mot de passe" name="pass" onChange={this.HandleChange}/>
                                  <div style={{fontSize: 12 , color: "red"}}>{this.state.passwordError}</div>
                                    <span className="glyphicon 
                                    glyphicon-eye-close form-control-feedback" aria-hidden="true"></span>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="re-password">Confirmation</label>
                                    <input type="password" className="form-control" id="Confirmation" placeholder="Confirmation mot de passe" name="repass"/>
                                    <span className="glyphicon 
                                    glyphicon-eye-close form-control-feedback" aria-hidden="true"></span>
                                </div>
             
 <button  className="btn btn-primary" onClick={(e) => {
                this.props.addUser(this.state); 
              }} disabled={!this.state.username || !this.state.email }>Register<span class="glyphicon 
                                    glyphicon-send" aria-hidden="true"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           )
    }
};

export default connect(
    null,
    { addUser }
  )(Register);
  
// export default  Register;