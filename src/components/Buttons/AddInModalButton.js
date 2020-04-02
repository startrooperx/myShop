import React from 'react';
import './Buttons.css';

class AddInModalButton extends React.Component {
    render () {
        return (
            <div>
                <button
                    disabled={this.props.disabled} 
                    onClick={this.props.clicked}>
                    <strong>Submit Vehicle</strong>
                </button>
            </div>
        );
    }
};

export default AddInModalButton;

