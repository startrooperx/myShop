import React from 'react';
import classes from'./TableNavBar.module.css';

class TableNavBar extends React.Component {
    render() {
        return (
            <div className={classes.nav}>
                <ol className={classes.tabList}>
                    <li><strong><a href='#'>Id</a></strong></li>
                    <li><strong><a href='#'>Vehicle Brand</a></strong></li>
                    <li><strong><a href='#'>Model</a></strong></li>
                    <li><strong><a href='#'>Production Date</a></strong></li>
                    <li><strong><a href='#'>Price</a></strong></li>
                </ol>
            </div>
        );
    }
};

export default TableNavBar;