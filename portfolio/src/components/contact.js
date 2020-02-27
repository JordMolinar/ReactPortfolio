import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default class ContactPage extends React.Component {
    render(){
        return(
           <div>
               
            <Jumbotron>
            <h1>Get Exclusive Updates On Projects</h1>
            <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Button>Submit</Button>
            </Jumbotron>
           </div>
        )
    }
}