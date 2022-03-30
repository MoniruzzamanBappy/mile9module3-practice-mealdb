import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './RestourentSearch.css'

const RestourentSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[searchText])
    const restaurant = e =>{
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h1>Search Your Food!</h1>
            <input onChange={restaurant} type="text" name='' id='' placeholder='Search Food...' />
            <div className='meal-container'>
                {
                    meals.map(meal=><Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default RestourentSearch;