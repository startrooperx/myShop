import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import classes from '../CarList/CarList.module.css';

class About extends React.Component{
    render() {
        return(
            <div className={classes.content}>
                <NavBar />
                <br/>
                <h1>Info About the Marketplace</h1>
            </div>
        );
    }    
};

export default About;
