import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import { useRecipeStore } from './components/recipeStore'

export default function App() {
  const setRecipes = useRecipeStore((s) => s.setRecipes)

  useEffect(() => {
    const initial = [
      { id: 1, title: 'Jollof Rice', description: 'Spicy tomato rice — West African classic.' },
      { id: 2, title: 'Simple Pancakes', description: 'Fluffy pancakes for breakfast.' },
    ]
    setRecipes(initial)
  }, [setRecipes])

  return (
    <Router>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: 16 }}>
        <header>
          <h1>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Recipe Sharing App
            </Link>
          </h1>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddRecipeForm />
                  <RecipeList />
                </>
              }
            />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
