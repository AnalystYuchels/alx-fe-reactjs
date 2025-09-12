import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

export default function RecommendationsList() {
  // selectors
  const recommendations = useRecipeStore((s) => s.recommendations);
  const generateRecommendations = useRecipeStore((s) => s.generateRecommendations);
  const favorites = useRecipeStore((s) => s.favorites);
  const recipes = useRecipeStore((s) => s.recipes);

  // regenerate recommendations when favorites or recipes change
  useEffect(() => {
    // call the store action that computes recommendations
    generateRecommendations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generateRecommendations, favorites.length, recipes.length]);

  return (
    <section>
      <h2>Recommended for You</h2>

      <button
        type="button"
        onClick={() => generateRecommendations()}
        style={{ marginBottom: 8 }}
      >
        Refresh Recommendations
      </button>

      {recommendations && recommendations.length > 0 ? (
        recommendations.map((r) => (
          <article key={r.id} style={{ border: '1px solid #eee', padding: 8, marginBottom: 8 }}>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </article>
        ))
      ) : (
        <p>No recommendations yet. Add favorites to get personalized suggestions.</p>
      )}
    </section>
  );
}
