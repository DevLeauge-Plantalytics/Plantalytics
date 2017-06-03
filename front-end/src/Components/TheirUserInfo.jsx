import React from 'react';
export default ({user}) => (
  <div id="user-info">
    <h1 id="profile-info-username">{user.username}</h1>
    <p>{user.firstname} {user.lastname}</p>
    <p>{user.address}</p>
    <p>{user.zipcode}</p>
    <button type="edit-profile">Edit Profile</button>
  </div>
)