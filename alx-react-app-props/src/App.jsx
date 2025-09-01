import React from "react";
import UserProfile from "./components/UserProfile";
import UserContext from "./components/UserContext";

function App() {
  const user = {
    name: "John Doe",
    age: 25,
    bio: "Loves coding and learning React"
  };

  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
