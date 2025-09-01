import React from "react";

function MainContent() {
  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: "#e6f7ff",
        minHeight: "200px",
      }}
    >
      <h2 style={{ color: "darkslategray", textAlign: "center" }}>
        Welcome to My Page
      </h2>
      <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;
