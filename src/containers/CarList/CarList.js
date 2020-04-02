import React from 'react';
import classes from './CarList.module.css';
import CarDetails from '../../components/CarDetails/CarDetails';
import TableNavBar from '../../components/TableNavBar/TableNavBar';
import axios from '../../axios-cars';
import Spinner from '../../components/UI/Spinner/Spinner';
import AddButton from '../../components/Buttons/AddButton';
import Modal from '../../components/UI/Modal/Modal';
import NewCarForm from '../../components/NewCarForm/NewCarForm';
import NavBar from '../../components/NavBar/NavBar';
import {withRouter} from 'react-router-dom';


class CarList extends React.Component {
    state = {
        cars: null,
        error: false,
        carAddingMode: false,
    }

    componentDidMount () {
        axios.get( '/Cars.json' )
            .then( response => {
                const fetchedCars = [];
                for(let key in response.data) {
                    fetchedCars.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState( { cars: fetchedCars } );
                } )
                .catch( error => {
                    this.setState( { error: true } );
                } );
    }

    addCarHandler = () => {
        this.setState( { carAddingMode: true } );
    }

    addCarCancelHandler = () => {
        this.setState( { carAddingMode: false } );
    }

    removeCarHandler = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        axios.delete(`Cars/${id}.json`)
        .then(() => {
            const updatedCars = this.state.cars.filter(el => el.id !== id);
            this.setState({cars: updatedCars});
        })
        .catch( error => {
            this.setState( { error: true } );
        } );
    }

    // viewCarDetails = (id) => {
    //     this.context.history.push(this.context.location.pathname + '/' + id);
    //     console.log(this.context.history)
    // }
    

    render() {
        let carsArr = <Spinner />;
        if (this.state.cars) {
            carsArr = (
                <div>
                    <TableNavBar cars={this.state.cars}/>
                    {this.state.cars.map(car => {
                    return (
                        <div key={car.id}>
                            <CarDetails car={car} />
                            <center><button onClick={e => this.removeCarHandler(e, car.id)}>Delete</button></center>
                        </div>
                        ); 
                    })}
                    <AddButton clicked={this.addCarHandler}/>
                </div>
            )
        }
        
        return(
            <div className={classes.content}>
                <NavBar />
                {carsArr}

                <Modal show={this.state.carAddingMode} modalClosed={this.addCarCancelHandler}>
                    <NewCarForm />
                </Modal>
                
            </div>
        );
    }
};

export default withRouter(CarList);