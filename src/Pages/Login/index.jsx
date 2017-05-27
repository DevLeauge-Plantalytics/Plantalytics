import React, {Component} from 'react';
import LoginForm from '../../Containers/Login-Form';
import SignUpBtn from '../../Components/SignUpButton';
import SocialLogin from '../../Components/SocialLogin';

export default () => (
  <div id="login-page">
    <SocialLogin/>
    <LoginForm/>
    <SignUpBtn/>
  </div>
)