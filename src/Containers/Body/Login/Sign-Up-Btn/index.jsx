import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

class SignUpButton extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="sign-up-from-login">
        <p id="sufl-Q">Dont have an account?</p>
        <Link to="/plantalytics/sign-up"> <button id="sufl-btn">Sign Up</button></Link>
      </div>
    )
  }
}
export default SignUpButton;