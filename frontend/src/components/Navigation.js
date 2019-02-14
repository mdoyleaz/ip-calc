import '../css/Navigation.css';

import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavigationBarTop extends Component {
  render() {
    return (<Navbar variant="dark" collapseOnSelect="collapseOnSelect" fixed="top">
        <Navbar.Brand href="#brand">
          IP Calculator
        </Navbar.Brand>
        <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav>
          <Nav.Link key={1} href="#ping">
            Pingy
          </Nav.Link>
          <Nav.Link key={2} href="#calc">
            IP calc
          </Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>)
  };
};

class Navigation extends Component {
  render() {
    return (<NavigationBarTop/>)
  }
}

export default Navigation;
