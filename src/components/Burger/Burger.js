import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

    // Takes ingredients and takes the key-value pairs into an Array.
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
                });
        })
        // flattens our array to check if the length = 0
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }
    console.log(transformedIngredients)
    return (
        <div className={ classes.Burger }>
            <BurgerIngredient type="bread-top"/>
                { transformedIngredients }
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
