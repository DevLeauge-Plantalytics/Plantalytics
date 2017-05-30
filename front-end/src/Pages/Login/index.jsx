import React from 'react';
import LoginForm from '../../Containers/Login-Form';
import SignUpBtn from '../../Components/SignUpButton';
import SocialLogin from '../../Components/SocialLogin';
import './styles.css';

export default () => (
  <div id="login-page">
    <SocialLogin/>
    <LoginForm/>
    <SignUpBtn/>
  </div>
)