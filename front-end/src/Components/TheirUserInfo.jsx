import React from 'react';
import {Link} from 'react-router-dom';
export default ({user}) => (
  <div id="their-user-info">
    <h1 id="profile-info-username">{user.username}</h1>
    <p>{user.firstname} {user.lastname}</p>
    <p>{user.address}</p>
    <p>{user.zipcode}</p>
    <button type="edit-profile">Edit Profile</button>
    <Link to="/location"><button id="add-crop">View Map</button></Link>
  </div>
)