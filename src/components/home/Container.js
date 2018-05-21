import React from 'react';
import {Link} from 'react-router';
import Ex from '../../../example';

class Container extends React.Component{
    render(){
        return(
            <div className="row container-main">
                <div className="col-md-12">
                    {/* <h1>{Ex.forecast.simpleforecast.forecastday[0].date.tz_long}</h1> */}
                </div>
            </div>
        );
    }
}

export default Container;