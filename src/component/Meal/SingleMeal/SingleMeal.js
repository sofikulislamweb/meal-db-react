import React from 'react';
import './SingleMeal.css'

const SingleMeal = (props) => {
    // console.log(props)
    const { strMeal, strMealThumb } = props.sofik;
    // console.log(props.sofik)
    return (
        <div className='meals'>
            <h4>Name : {strMeal}</h4>
            <img style={{ width: '400px', borderRadius: '20px' }} src={strMealThumb} alt="" />
        </div>
    );
};

export default SingleMeal;