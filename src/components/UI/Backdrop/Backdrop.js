import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);
// class Backdrop extends React.Component {
//     render() {
//         return (
//             <Backdrop>
//                 {this.props.show 
//                     ? <div className={classes.Backdrop} onClick={this.props.clicked}></div> 
//                     : null}
//             </Backdrop>
//         )
//     }
// }

export default backdrop;