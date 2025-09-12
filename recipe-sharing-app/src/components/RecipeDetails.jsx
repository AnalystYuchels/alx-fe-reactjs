import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

export default function RecipeDetails() {
  const { id } = useParams()
  const recipeId = Number(id)
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId))

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
        <DeleteRecipeButton id={recipe.id} />
        <Link to="/">Back</Link>
      </div>
    </div>
  )
}
