import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class NavBar extends React.Component{
    render(){
        return(
            <Navbar bg="light">
    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
    <div href="#project">Projects</div>
    <div href="#about">About</div>
  </Navbar>
        )
    }
}