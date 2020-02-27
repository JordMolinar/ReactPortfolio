import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default class AboutPage extends React.Component {
    render(){
        return(
           <div>
               <Jumbotron>
               <h1>About Page</h1>
      <Row>
      <div>

<Row>
  <Col xs={6} md={2}>
    <Image src="holder.js/171x180" rounded />
  </Col>
   <Col xs={6} md={2}>
    <Image src="holder.js/171x180" rounded />
  </Col>
   <Col xs={6} md={2}>
    <Image src="holder.js/171x180" rounded />
  </Col>
</Row>
<Row>
  <Col xs={6} md={2}>
    <Image src="holder.js/171x180" rounded />
  </Col>
   <Col xs={6} md={2}>
    <Image src="holder.js/171x180" rounded />
  </Col>
   <Col xs={6} md={4}>
    <Image src="holder.js/171x180" rounded />
  </Col>
</Row>

</div>
           
             <Card style={{ width: '35rem' }}>
<Card.Body>
  <Card.Title>Hello World</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">Jordan M</Card.Subtitle>
  <Card.Text>
    Here is some brief content in egards to who i am. .
  </Card.Text>
  <Row><Col>
  <p>Place Email Here</p>
  </Col>
 <Col>
 <p>Place LinkedIN Here</p>
 </Col></Row>
</Card.Body>
</Card>

      </Row>

               </Jumbotron>
           </div>
        )
    }
}