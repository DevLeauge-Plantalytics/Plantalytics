import React, {Component} from 'react';
class SocialSignUp extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="social-sign-up">
        <button id="facebook-sign-up">Sign up with Facebook</button>
        <button id="google-sign-up">Sign up with Google</button>
        <p id="divider">or</p>
      </div>
    )
  }
}
export default SocialSignUp;