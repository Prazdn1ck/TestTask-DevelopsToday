import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import RecipeDetailPage from "./pages/Home";
import RecipeListPage from "./pages/RecipePage";
import RecipeList from "./components/RecipeList";

const App: React.FC = () => {
  return (
    <div>
      <div>
        <h1>Recipes</h1>
        <RecipeList />
      </div>
    </div>
  );
};

export default App;
