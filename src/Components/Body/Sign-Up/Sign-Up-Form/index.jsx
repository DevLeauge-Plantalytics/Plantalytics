import React, {Component} from 'react';
class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <form id="sign-up-form">
        <input type="text" placeholder="Email Address"/>
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="password" placeholder="Password"/>
        <input type="text" placeholder="Home Address"/>
        <input type="text" placeholder="Zipcode"/>
        <input type="checkbox">Agree to Terms</input>
        <button type="submit">Sign Up</button>
      </form>
    )
  }
}
export default SignUpForm;