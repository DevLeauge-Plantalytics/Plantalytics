import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div id="sign-up-from-login">
    <p id="sufl-Q">Don't have an account?</p>
    <Link to="/sign-up"><button id="sufl-btn">Sign Up</button></Link>
  </div>
)