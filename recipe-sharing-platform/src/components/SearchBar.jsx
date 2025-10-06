import React from 'react';
import { useRecipeStore } from './recipeStore';

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{ padding: '8px', marginBottom: '12px', width: '100%' }}
    />
  );
}
