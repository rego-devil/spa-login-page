import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { routes as links } from '../routes';

export const Header = ({ isAuthenticated }) => (

  <Navbar fixedTop={true}>
    <Nav>
      {
        links.map((item) => item.isNavBar && 
            ( item.path !== '/logout' || (item.path === '/logout') && isAuthenticated ) &&
              <NavItem componentClass={Link} to={item.path} href={item.path} key={item.path}>{item.navBarTitle}</NavItem>
        )
      }
    </Nav>
  </Navbar>
);


Header.propTypes = {
  isAuthenticated: PropTypes.bool,
};