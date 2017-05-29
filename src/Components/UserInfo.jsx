import React from 'react';

export default ({user}) => (
  <div id="user-info">
    <h2>Username: {user.username}</h2>
    <h3>FirstName : {user.fistname} LastName: {user.lastname} </h3>
    <h4>Address : {user.address}</h4>
    <h4>Zipcode : {user.zipcode}</h4>
    <button type="edit-profile">Edit Profile</button>
  </div>
)