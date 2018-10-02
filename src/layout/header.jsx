import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => (
  <div className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
  </div>
)