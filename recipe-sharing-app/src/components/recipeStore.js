import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Jollof Rice", description: "Classic Nigerian party rice." },
    { id: 2, title: "Egusi Soup", description: "Rich melon seed soup with meat." },
  ],

  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
}));
