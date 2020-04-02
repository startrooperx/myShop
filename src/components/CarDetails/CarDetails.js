import React from 'react';
import classes from './CarDetails.module.css';
import {NavLink} from 'react-router-dom'

class CarDetails extends React.Component {
    render() {
        const link = '/Details' + this.props.car.id;
        return(
            <div className={classes.arr}>
                {/* {this.props.name} */}
                <ol className={classes.tabList}>
                    <li><NavLink to={link} >{this.props.car.id}</NavLink></li>
                    <li>{this.props.car.carMake}</li>
                    <li>{this.props.car.name}</li>
                    <li>{this.props.car.productionDate}</li>
                    <li>{this.props.car.price}</li>
                </ol>
            </div>
        );
    }
} ;

export default CarDetails;