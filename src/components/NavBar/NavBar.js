import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavBar.module.css';

class NavBar extends React.Component {
    render() {
        return(
            <div>
                <div className={classes.header}>
                    <div className={classes.logo}>
                        <strong>Car Resale Market</strong>
                    </div>
                </div>
                <div className={classes.navi}>
                    <ol className={classes.list}>
                        <li><NavLink to='/' activeClassName='list a'>Home</NavLink></li>
                        <li><NavLink to='About' activeClassName='list a'>About</NavLink></li>
                        <li><NavLink to='Contact' activeClassName='list a'>Contact</NavLink></li>
                    </ol>
                </div>
            </div>
        );
    }
};

export default NavBar;