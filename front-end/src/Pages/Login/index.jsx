import React from 'react';
import LoginForm from '../../Containers/Login-Form';
import SignUpBtn from '../../Components/SignUpButton';
import './styles.css';

export default () => (
  <div id="login-page">
    <LoginForm/>
    <SignUpBtn/>
  </div>
)