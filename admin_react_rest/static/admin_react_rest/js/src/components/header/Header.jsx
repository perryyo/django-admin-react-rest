import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, LinkContainer} from 'react-bootstrap';

class Header extends React.Component {

  render() {
    let userLinks = [];
    let counter = 1;

    Object.keys(this.props.user.userlinks).map(key => {
      userLinks.push(<NavItem eventKey={ counter } key={ counter } href={ this.props.user.userlinks[key] }>{ key }</NavItem>)
      counter += 1;
    })

    return (
      <Navbar fluid inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href={ this.props.general.site_url }>{ this.props.general.site_header }</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <Navbar.Text>
              Welcome, { this.props.user.username }!
            </Navbar.Text>
            { userLinks }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default Header;
