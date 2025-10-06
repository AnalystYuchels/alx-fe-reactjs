import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id, 10));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe details:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="container mx-auto p-6">
        <p className="text-center text-gray-600">Loading recipe details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 inline-block mb-6"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {recipe.ingredients && recipe.ingredients.length > 0 ? (
                recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))
              ) : (
                <li>No ingredients listed.</li>
              )}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              {recipe.instructions && recipe.instructions.length > 0 ? (
                recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))
              ) : (
                <li>No instructions provided.</li>
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;