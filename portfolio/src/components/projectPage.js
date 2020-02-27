import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import OneLayer from './projects/projectLevel1';

export default class ProjectPage extends React.Component {
   
    render(){ 
 
        return(
            <div>
                <Jumbotron>
                <h1>Project Page</h1>
                <OneLayer/>
                </Jumbotron>
            </div>
        )
    }
}