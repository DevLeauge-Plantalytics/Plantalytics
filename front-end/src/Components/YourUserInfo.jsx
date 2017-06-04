import React from 'react';
import {Link} from 'react-router-dom';
export default ({user}) => (
  <div id="your-user-info">
    <h1 id="profile-info-username">{user.username}</h1>
    <p>{user.firstname} {user.lastname}</p>
    <Link id="location-link" to="/location"><h3>{user.address}</h3></Link>
    <p>{user.zipcode}</p>
    <button id="edit-profile">Edit Profile</button>
    <Link to="/location"><button id="add-crop">View Map</button></Link>
  </div>
)