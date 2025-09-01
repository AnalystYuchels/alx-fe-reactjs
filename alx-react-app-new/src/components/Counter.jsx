import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: "20px" }}>Current Count: {count}</p>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: "10px 15px" }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ padding: "10px 15px" }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ padding: "10px 15px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
