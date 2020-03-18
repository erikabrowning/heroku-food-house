import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomRecipe = () => {
  // adding a note

  const [random, setRandom] = useState({ meals: [] });

  const getRandom = async () => {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    setRandom({ meals: data.meals[0] });
  };

  useEffect(() => {
    getRandom();
  }, []);

  console.log(random);

  return (
    <div>
      <h1>{random.meals.strMeal}</h1>
      <p>Category: {random.meals.strCategory}</p>
      <img src={random.meals.strMealThumb} alt={random.meals.strMeal}></img>
      <p>{random.meals.strInstructions}</p>
    </div>
  );
};

export default RandomRecipe;
