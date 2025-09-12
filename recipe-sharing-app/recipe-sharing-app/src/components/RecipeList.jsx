import React from 'react'
import { useRecipeStore } from '../stores/recipeStore'

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes)

  if (recipes.length === 0) {
    return <p>No recipes yet — add one!</p>
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}
