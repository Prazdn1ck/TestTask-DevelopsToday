import React from "react";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: string;
  name: string;
  image: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ id, name, image }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <Link to={`/recipe/${id}`}>View Details</Link>
    </div>
  );
};

export default RecipeCard;
