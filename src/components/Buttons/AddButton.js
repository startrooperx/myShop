import React from 'react';

class AddButton extends React.Component {
    render () {
        return (
            <div>
                <button 
                    onClick={this.props.clicked}>
                        <strong>Add new Vehicle</strong>
                </button>
            </div>
        );
    }
};

export default AddButton;