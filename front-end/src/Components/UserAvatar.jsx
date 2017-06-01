import React from 'react';

export default ({user}) => (
  <div id="user-avatar">
    <div id="user-profile-pic"></div>
    <h3 id="user-avatar-name">{user.username}</h3>
    <p id="user-avatar-location">{user.zipcode}</p>
    <p id="user-avatar-joined">Member since {user.createdAt}</p>
    <div id="user-avatar-sup-opt">
      <p id="user-avatar-sup-opt-Q">Have room to grow?</p>
      <h4 id="user-avatar-sup-opt-btn">Become a Supplier</h4>
    </div>
  </div>
)