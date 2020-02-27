import React from 'react';
import NavBar from './components/navbar';
import FooteR from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ProjectPage from './components/projectPage';
import AboutPage from './components/about';
import ContactPage from './components/contact';
// import ProjectPage from './components/projectPage';
// import OneLayer from './components/projects/projectLevel1';


function App() {
  return (
    <div className="App">
     <NavBar/>
 
  <AboutPage/>
 
  <Container>
  <ProjectPage/>
  </Container>
  <Container>
  <ContactPage/>
  </Container>
     <FooteR/>
    </div>
  );
}

export default App;
