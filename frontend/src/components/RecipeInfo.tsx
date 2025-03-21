import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeInfo } from "../services/recipeService";

const RecipeInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeInfo(id!);
      setRecipe(data.meals ? data.meals[0] : null);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading recipe details...</p>;

  return (
    <div className="recipe-info">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>{recipe.strMeal}</h2>
      <p>
        <strong>Country:</strong> {recipe.strArea}
      </p>
      <p>
        <strong>Category:</strong> {recipe.strCategory}
      </p>
      <h3>Ingredients</h3>
      <ul>
        {Object.keys(recipe)
          .filter((key) => key.includes("strIngredient") && recipe[key])
          .map((key) => (
            <li key={key}>{recipe[key]}</li>
          ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeInfo;
