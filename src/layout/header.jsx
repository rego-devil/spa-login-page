import React from 'react';
import {Link} from 'react-router-dom';

export const Header = ({isAuthenticated}) => (
  <div className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      {
        isAuthenticated ? ( 
          <ul><li><Link to="/logout">Logout</Link></li></ul> 
        ) : null
      }
      
  </div>
)