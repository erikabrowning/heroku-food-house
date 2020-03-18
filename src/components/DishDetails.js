import React, { useState, useEffect } from "react";
import axios from "axios";

const DishDetails = props => {
  const [recipe, setRecipe] = useState({ meals: [] });

  const getRecipe = async () => {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`
    );
    setRecipe({ meals: data.meals[0] });
  };

  useEffect(() => {
    getRecipe();
  }, []);

  console.log(recipe);

  return (
    <div>
      <h1>{recipe.meals.strMeal}</h1>
      <p>Category: {recipe.meals.strCategory}</p>
      <img src={recipe.meals.strMealThumb} alt={recipe.meals.strMeal}></img>
      <p>{recipe.meals.strInstructions}</p>
    </div>
  );
};

export default DishDetails;
