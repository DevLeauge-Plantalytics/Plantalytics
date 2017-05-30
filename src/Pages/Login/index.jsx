import React from 'react';
import LoginForm from '../../Containers/Login-Form';
import SignUpBtn from '../../Components/SignUpButton';
import './styles.css';

const loggedInCheck = () => {
  console.log(localStorage);
  return
  (<div id="login-page">
    <LoginForm/>
    <SignUpBtn/>
  </div>;
};
export default () => (
  loggedInCheck()
)