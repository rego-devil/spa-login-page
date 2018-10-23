import React from 'react';
import {Link} from 'react-router-dom';
import {routes as links} from '../routes';

export const Header = ({isAuthenticated}) => (
  <div className="header">
      <ul>
        {
          links.map((item) => 
            item.isNavBar && <li key={item.path}>
               {
                item.navBarTitle === 'Logout' ? (
                  isAuthenticated ? <Link to={item.path}>{item.navBarTitle}</Link> : null 
                ) : <Link to={item.path}>{item.navBarTitle}</Link>
              }
            </li>
          )
        }
      </ul>
      
  </div>
)