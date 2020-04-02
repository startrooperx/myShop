import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import axios from '../../axios-cars';
import Spinner from '../../components/UI/Spinner/Spinner';

class Details extends React.Component{
    state = {
        car: null,
        error:false,
        id: window.location.pathname.slice(7)
    }

    componentDidMount () {
        axios.get( '/Cars' + this.state.id + '.json' )
            .then( response => {
                const fetchedCar = [];
                for(let key in response.data) {
                    fetchedCar.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState( { car: fetchedCar } );
                } )
                .catch( error => {
                    this.setState( { error: true } );
                } );
        console.log(this.state.car);
    }

    render() {
        let carArr = <Spinner />;
        if(this.state.car) {
            carArr =(
                <div>
                    {this.state.car.map(el => {
                        return (
                            <div>
                                {el}
                            </div>   
                        );
                    })}
                </div>
            )
        }

        return(
            <div class='content'>
                <NavBar />
                {carArr}
            </div>
        ); 
    }
}

export default Details;
