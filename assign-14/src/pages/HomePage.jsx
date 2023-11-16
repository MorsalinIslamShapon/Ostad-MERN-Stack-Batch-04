import React from 'react';
import NavBar from './NavBar';
import Card from '../Components/Home/Card';
import Subscribe from '../Components/Home/Subscribe';
import WorkList from '../Components/Home/WorkList';
import FeaturedProject from '../Components/Home/FeaturedProject';

const HomePage = (props) => {
    return (
        <NavBar>
           <Card/>
           <WorkList/>
           <FeaturedProject/>
            <Subscribe/>
        </NavBar>
    );
};

export default HomePage;