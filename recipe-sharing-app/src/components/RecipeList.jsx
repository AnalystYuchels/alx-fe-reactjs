import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

export default function RecipeList() {
  const { recipes } = useRecipeStore(); // ✅ use store

  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
