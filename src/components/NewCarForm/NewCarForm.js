import React, {Component} from 'react';

import Spinner from '../UI/Spinner/Spinner';
import axios from '../../axios-cars';
import Input from '../UI/Input/Input';
import AddInModalButton from '../Buttons/AddInModalButton';

class NewCarForm extends Component {
    state = {
        form: {
            carMake: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Vehicle Brand'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Model'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            productionDate: {
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    
                },
                value: '',
                validation: {
                    required: true
                },
                touched: false
            },
            price: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Price in PLN'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            }
            
        },
        formIsValid: false,
        loading: false,
        submitted: false
    }

    formHandler = (event) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for(let formElementIdentifier in this.state.form) {
            formData[formElementIdentifier] = this.state.form[formElementIdentifier].value;
        }
        const newCar = {
            car: formData
        }
        axios.post( '/Cars.json', newCar.car )
            .then( response => {
                console.log(response)
                this.setState( { loading: false} );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    checkValidity(value, rules) {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !=='' && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.form
        };
        const updatedFormElement = {
            ...updatedForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for(let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({form: updatedForm, formIsValid: formIsValid});
    }

    submittedChangeHandler = () => {
        this.setState({submitted: true});
    }

    render() {
        const formElementsArray = [];
        for(let key in this.state.form) {
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            }) 
        }
        let displayForm = (
            <form onSubmit={this.formHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value} 
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                    )
                )}
                <AddInModalButton 
                    disabled={!this.state.formIsValid} 
                    clicked={this.submittedChangeHandler}>
                </AddInModalButton> 
            </form>
        );

        if(this.state.loading) {
            displayForm = (
                <div style={{color: "black"}}>                
                    <Spinner />
                    Vehicle adding in process...
                </div>
            );
        }
        
        return (
            <div>
                    <h4 style={{color: "black"}}> Enter new Vehicle details </h4>
                    {displayForm}
                    {(!this.state.loading && this.state.submitted)
                        ?                 
                            <p style={{color: "black"}}>
                            Vehicle successfuly added. Add more or reload the page to update results.
                            </p>
                        :
                            null
                    }
            </div>
        )
    }
}

export default NewCarForm;