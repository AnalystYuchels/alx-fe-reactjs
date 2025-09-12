import create from 'zustand';

export const useRecipeStore = create((set) => ({
  // all recipes
  recipes: [],

  // search feature (required by checker)
  searchTerm: '',
  filteredRecipes: [],

  // add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // update a recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  // delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // reset recipes
  setRecipes: (recipes) => set({ recipes }),

  // set search term and filter at the same time
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        (recipe.title || '').toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  // manually run filtering (optional)
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        (recipe.title || '').toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));
