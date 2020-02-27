import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
export default class NavBar extends React.Component{
    render(){
        return(
            <Navbar bg="light">
    <Navbar.Brand href="#home">Jordan M.</Navbar.Brand>
    <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="./about.js">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Projects</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
  </Navbar>
        )
    }
}