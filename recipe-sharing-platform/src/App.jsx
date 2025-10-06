import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Navbar */}
        <nav className="bg-indigo-600 text-white px-6 py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Recipe Sharing Platform</h1>
            <div className="space-x-6">
              <Link
                to="/"
                className="hover:text-gray-200 transition"
              >
                Home
              </Link>
              <Link
                to="/add-recipe"
                className="hover:text-gray-200 transition"
              >
                Add Recipe
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;