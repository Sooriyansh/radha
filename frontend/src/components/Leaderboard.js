import React, { useEffect, useState } from "react";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch("https://radha-d10l.onrender.com/api/leaderboard")
      .then((res) => res.json())
      .then((data) => setLeaderboard(data))
      .catch((err) => console.error("Failed to fetch leaderboard:", err));
  }, []);

  return (
    <div className="mt-8 bg-white shadow-xl rounded-2xl p-6 w-96 border border-pink-200">
      <h3 className="text-xl font-bold text-center text-pink-700 mb-4">
        🌼 Leaderboard 🌼
      </h3>
      <ul className="divide-y divide-gray-200">
        {leaderboard.map((u, i) => (
          <li
            key={u.username}
            className={`flex justify-between items-center px-3 py-2 rounded-lg ${
              i === 0
                ? "bg-yellow-100 font-bold text-orange-600"
                : "hover:bg-pink-50"
            }`}
          >
            <span>
              {i + 1}. {u.name}
            </span>
            <span className="text-sm text-gray-700">
              {u.mala} Mala | High: {u.highScore}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
