import React from 'react';

import {Navbar, Nav, NavItem} from 'react-bootstrap'

export default class Header extends React.Component {
  render(){
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Wallet</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} onClick ={this.props.reset} href="#">Reset</NavItem>
            <NavItem eventKey={2} href="https://github.com/hamzahc1/wallet">Source</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
  }
}