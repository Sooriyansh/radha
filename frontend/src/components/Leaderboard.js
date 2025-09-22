import React, { useEffect, useState } from "react";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchMessage= () => {
    fetch("https://radha-d10l.onrender.com/api")
      .then((res) => res.json())
      .then((data) => setLeaderboard(data))
      .catch((err) => console.error("Failed to fetch leaderboard:", err));
  };

  return (
<div style={{ padding: "2rem" }}>
      <h1>React + Express Demo</h1>
      <button onClick={fetchMessage}>Fetch Message from Backend</button>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>{message}</p>
    </div>
  );
}

export default Leaderboard;

