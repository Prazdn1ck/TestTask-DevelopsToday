import axios from "axios";

const API_URL = "http://localhost:3000";

export const getAllRecipes = async () => {
  const response = await axios.get(`${API_URL}/recipes/all`);
  return response.data;
};

export const getRecipeInfo = async (id: string) => {
  const response = await axios.get(`${API_URL}/recipes/${id}`);
  return response.data;
};
