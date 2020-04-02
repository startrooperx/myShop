import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import classes from '../CarList/CarList.module.css';

class Contact extends React.Component{
    render() {
        return(
            <div className={classes.content}>
                <NavBar />
                <br/>
                <h1>Contact Data</h1>
            </div>
        );
    }    
};

export default Contact;
