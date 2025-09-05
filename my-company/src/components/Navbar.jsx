import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#333",
        color: "white",
      }}
    >
      <h2>My Website</h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>
        <Link to="/services" style={{ color: "white", textDecoration: "none" }}>
          Services
        </Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
