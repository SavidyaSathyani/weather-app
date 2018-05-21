import React from 'react';
import {Link} from 'react-router';

class About extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Weather Application</h1>
                <p>Allows you to view the weather forecast report for 3 days anywhere in the world.</p>
                <Link to="/">Go to home</Link>
            </div>
        );
    }
}

export default About;