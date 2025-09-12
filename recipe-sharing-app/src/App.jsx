import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, { id: recipes.length + 1, ...recipe }]);
  };

  return (
    <>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm onAddRecipe={addRecipe} />

      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
      </Routes>
    </>
  );
}

export default App;
