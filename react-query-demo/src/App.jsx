import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

// Initialize QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1 className="text-center text-2xl font-bold my-4">
          React Query Demo
        </h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
