import React, { useState } from "react";
import Signup from "./components/Signup";
import Counter from "./components/Counter";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="bg-yellow-200 min-h-screen flex flex-col items-center p-6">
      {!user ? (
        <Signup setUser={setUser} />
      ) : (
        <>
          <h2 className="text-xl font-bold text-pink-700 mb-4">
            Welcome, {user.name} 🌸
          </h2>
          <img
            src="http://localhost:5000/name-img.webp"
            alt="Radha"
            className="rounded-lg shadow-md max-w-xs mx-auto mb-4"
          />
          <Counter user={user} setUser={setUser} />
          <Leaderboard />
        </>
      )}
    </div>
  );
}

export default App;
