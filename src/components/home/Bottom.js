import React from 'react';
import {Link} from 'react-router';
import gitIcon from  '../../resources/images/git.png';

class Bottom extends React.Component{
    render(){
        return(
            <div className="row bottom">
                <div className="row">
                    <div className="col-md-12 bottom-content">
                        <p>Designed and developed by Savidya Sathyani</p>
                        <a href="https://github.com/SavidyaSathyani/weather-app"><img src={gitIcon} width="20px" height="20px"/>View Code</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bottom;