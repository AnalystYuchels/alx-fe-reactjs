import React, { useEffect } from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import { useRecipeStore } from './stores/recipeStore'

export default function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes)

  useEffect(() => {
    // Initialize with some sample recipes
    const initialRecipes = [
      { id: 1, title: 'Jollof Rice', description: 'Spicy tomato rice.' },
      { id: 2, title: 'Pancakes', description: 'Fluffy and delicious.' },
    ]
    setRecipes(initialRecipes)
  }, [setRecipes])

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  )
}
