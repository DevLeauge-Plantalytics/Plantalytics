import React, {Component} from 'react';
import SignUpForm from '../../Containers/Sign-Up-Form';
import SocialSignUp from '../../Components/SocialSignUp';
import './styles.css';

export default () => (
  <div id="sign-up">
    <SocialSignUp/>
    <SignUpForm/>
  </div>
)
