import React from 'react';
import {Link} from 'react-router';
import weather from '../../resources/images/weather-underground.png';

class SearchBar extends React.Component{
    render(){
        return(
            <div className="row search-bar">
               <div className="col-md-6">
                <a href="https://www.wunderground.com/"><img className="img-class" src={weather} width="50px" height="50px" title="Weather Underground"/></a>
               </div>
               <div className="col-md-6">
                <input type="text" placeholder="Search a city here..." />
               </div>
            </div>
        );
    }
}
export default SearchBar;