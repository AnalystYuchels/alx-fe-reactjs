import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes)

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet — add one!</p>
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 8 }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <Link to={`/recipes/${recipe.id}`}>View</Link>
            <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
