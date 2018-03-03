import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Drawer from '../../container/Drawer/Drawer';
const layout = ( props ) => (
    <Aux>
        <div><Drawer />Toolbar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;