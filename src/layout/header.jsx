import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import routes from '../routes';

const HeaderInner = ({ isAuthenticated, match, location }) => (
  <Navbar fixedTop>
    <Nav>
      {
        console.log('match', match) || console.log('location', location) || 
        routes.map(item => item.isNavBar
            && (item.path !== '/logout' || (item.path === '/logout' && isAuthenticated))
            && (
              <NavItem
                componentClass={Link}
                to={item.path}
                href={item.path}
                key={item.path}
              >
                {item.navBarTitle}
              </NavItem>
            ))
      }
    </Nav>
  </Navbar>
);


HeaderInner.propTypes = {
  isAuthenticated: PropTypes.bool,
};


export default withRouter(HeaderInner);
