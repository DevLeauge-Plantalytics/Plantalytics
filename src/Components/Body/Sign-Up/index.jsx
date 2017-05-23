import React, {Component} from 'react';
import SignUpForm from '/Sign-Up-Form';
import SocialSignUp from '/Social-Sign-Up';
class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="sign-up">
        <SocialSignUp/>
        <SignUpForm/>
      </div>
    )
  }
}
export default SignUp;