import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const {strMeal, strMealThumb, strCategory, strArea} = props.meal;
    return (
        <div className='item'>
            <img className='img-thumb' src={strMealThumb} alt="" />
            <h1>{strMeal}</h1>
            <p>{strCategory}</p>
            <p><small>{strArea}</small></p>
        </div>
    );
};

export default Meal;