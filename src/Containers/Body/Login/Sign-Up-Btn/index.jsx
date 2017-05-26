import React, {Component} from 'react';

class SignUpButton extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="sign-up-from-login">
        <p id="sufl-Q">Don't have an account?</p>
        <button id="sufl-btn">Sign Up</button>
      </div>

    )
  }
}
export default SignUpButton;