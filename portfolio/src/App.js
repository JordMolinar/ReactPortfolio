import React from 'react';
import NavBar from './components/navbar';
import FooteR from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import OneLayer from './components/projects/projectLevel1';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <OneLayer/>
     <FooteR/>
    </div>
  );
}

export default App;
