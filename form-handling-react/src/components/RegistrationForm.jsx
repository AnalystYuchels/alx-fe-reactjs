import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username is required");
      return;
    }

    if (!email) {
      setErrors("Email is required");
      return;
    }

    if (!password) {
      setErrors("Password is required");
      return;
    }

    setErrors("");
    console.log("Form Submitted:", { username, email, password });

    // simulate API request
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Mock API Response:", data));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto">
      <h2>User Registration</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block w-full mb-2 border p-2"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-2 border p-2"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-2 border p-2"
      />

      {errors && <p style={{ color: "red" }}>{errors}</p>}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
