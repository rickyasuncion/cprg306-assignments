"use client";
import React from "react";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  try {
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const json = await response.json();
    return json.meals;
  } catch (error) {
    console.error(error);
  }
}

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
  
    useEffect(() => {
      async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        if (mealIdeas) {
          setMeals(mealIdeas);
        } else {
          setMeals([]);
        }
      }
      loadMealIdeas();
    }, [ingredient]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li
          className="p-2 m-4 bg-slate-900 justify-center mx-auto" 
          key={meal.idMeal}>
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;

