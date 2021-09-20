import React, { useEffect, useState } from 'react';
import SingleMeal from './SingleMeal/SingleMeal';

const Meal = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (
        <div>
            <h1>My meals</h1>
            {
                meals.map(meal => <SingleMeal
                    sofik={meal}
                ></SingleMeal>)
            }
        </div>
    );
};

export default Meal;