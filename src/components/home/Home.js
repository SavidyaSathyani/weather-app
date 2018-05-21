import React from 'react';
import {Link} from 'react-router';
import SearchBar from './SearchBar';
import Container from './Container';
import Bottom from './Bottom';

class Home extends React.Component{
    render(){
        return(
            <div>
                <SearchBar />
                <Container />
                <Bottom />
            </div>
        );
    }
}

export default Home;