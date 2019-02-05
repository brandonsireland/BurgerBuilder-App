import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Salad', type: 'cheese' },
    { label: 'Salad', type: 'meat' },
    { label: 'Salad', type: 'bacon' },
];

const buildControls = (props) => (

    <div className={ classes.BuildControls }>
        { controls.map( ctrl => ( 
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default buildControls;