import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    if (!window.confirm('Delete this recipe?')) return
    deleteRecipe(id)
    // navigate home after delete
    navigate('/')
  }

  return <button onClick={handleDelete}>Delete</button>
}
