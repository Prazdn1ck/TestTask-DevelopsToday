import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
console.log("API_URL:", API_URL);

interface Recipe {
  idMeal: string;
  strMeal: string;
}

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`${API_URL}/recipes/all`);
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      {recipes.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.idMeal}>{recipe.strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
