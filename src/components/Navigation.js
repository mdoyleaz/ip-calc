import '../css/Navigation.css';

import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavigationBarTop extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fluid fixedTop>
        <Navbar.Header>
          <Navbar.Brand >
            <a href="#brand">IP Calculator</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem key={1} href="#ping">
              Pingy
          </NavItem>
            <NavItem key={2} href="#">
              Link
          </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem key={4} href="#">
              Link Right
          </NavItem>
            <NavItem key={5} href="#">
              Link Right
          </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>);
  }
};

class Navigation extends Component {
  render () {
    return (
      <NavigationBarTop />
    )
  }
}

export default Navigation;
