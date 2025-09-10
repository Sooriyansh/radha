import React from "react";

function Counter({ user, setUser }) {
  // const handleClick = async () => {
  //   const res = await fetch("http://localhost:5000/api/update", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ username: user.username }),
  //   });
  //   const data = await res.json();
  //   setUser(data);
  // };
  // Example using fetch
const handleSubmit = async (e) => {
  e.preventDefault();

  const data = { name, username };

  const res = await fetch("https://radha-d10l.onrender.com/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  console.log(result);
};


  return (
    <div className="text-center space-y-4">
      <button
        onClick={handleClick}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition duration-300"
      >
        CLICK ME
      </button>

      <div className="text-2xl text-purple-800 font-semibold">
        {user.counter}. Shri Radha 🌸
      </div>

      <div className="text-xl text-orange-700 font-bold">
        MALA COUNT: {user.mala}
      </div>

      <div className="text-xl text-green-700 font-bold">
        HIGH SCORE: {user.highScore}
      </div>
    </div>
  );
}

export default Counter;

